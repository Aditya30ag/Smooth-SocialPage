// Groq API integration service for the chatbot

/**
 * Service to handle interactions with the Groq API for Llama 3.2 model
 * In production, API keys should be managed securely via environment variables
 */
class GroqService {
  constructor() {
    this.apiKey = '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';
    this.baseURL = 'https://api.groq.com/openai/v1/chat/completions';
    this.model = "llama-3.2-3b-preview";
    this.supportEmail = "connect@hirecentive.com";
    
    // Define context templates for different user types
    this.userContextTemplates = {
      company: {
        role: "hiring representative",
        interests: "finding qualified candidates, efficient hiring, recruitment process",
        goals: "hire quality candidates through our influencer network",
        relevantFeatures: "candidate vetting, influencer partnerships, hiring analytics"
      },
      influencer: {
        role: "social media influencer",
        interests: "earning incentives, growing network, job referrals",
        goals: "earn money by referring qualified candidates to job opportunities",
        relevantFeatures: "referral tracking, payment system, content sharing tools"
      },
      candidate: {
        role: "job seeker",
        interests: "finding employment, career growth, job opportunities",
        goals: "find suitable employment through our platform",
        relevantFeatures: "job listings, application process, connecting with influencers"
      }
    };
  }
  
  /**
   * Sends a chat completion request to Groq API
   * @param {Array} messages - Array of message objects with role and content properties
   * @param {Object} options - Additional options for the API request
   * @returns {Promise} - Promise that resolves with the response from Groq
   */
  async sendChatCompletion(messages, options = {}) {
    try {
      if (!this.apiKey) {
        console.warn('Groq API key is not set. Set REACT_APP_GROQ_API_KEY in your environment variables.');
        return { 
          error: "API key not configured",
          fallbackResponse: this.getFallbackResponse(messages[messages.length - 1]?.content)
        };
      }
      
      const defaultOptions = {
        temperature: 0.7, // Slightly reduced for more focused responses
        max_tokens: 1024,
        top_p: 0.9,
        stream: false
      };
      
      const requestOptions = { ...defaultOptions, ...options };
      
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: messages,
          temperature: requestOptions.temperature,
          max_tokens: requestOptions.max_tokens,
          top_p: requestOptions.top_p,
          stream: requestOptions.stream
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Groq API error:', errorData);
        return { 
          error: errorData.error?.message || 'Error calling Groq API',
          fallbackResponse: this.getFallbackResponse(messages[messages.length - 1]?.content)
        };
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error calling Groq API:', error);
      return { 
        error: error.message || 'Unknown error occurred',
        fallbackResponse: this.getFallbackResponse(messages[messages.length - 1]?.content)
      };
    }
  }
  
  /**
   * Generates a response for a specific user query in the context of Hirecentive
   * @param {string} userQuery - The user's message
   * @param {string} userType - Type of user (company, influencer, candidate)
   * @param {Array} conversationHistory - Optional array of previous messages for context
   * @returns {Promise<string>} - The AI-generated response
   */
  async generateHirecentiveResponse(userQuery, userType, conversationHistory = []) {
    // Ensure valid user type or default to generic
    const validUserType = this.userContextTemplates[userType] ? userType : 'candidate';
    const contextTemplate = this.userContextTemplates[validUserType];
    
    // Enhanced system prompt with specific user type context
    const systemPrompt = `You are a helpful assistant for Hirecentive, a platform that connects companies with influencers who help refer qualified candidates for jobs.
    
    The user is a ${validUserType} (${contextTemplate.role}) interested in ${contextTemplate.interests}.
    
    Their primary goal is to ${contextTemplate.goals}.
    
    Focus your responses on ${contextTemplate.relevantFeatures} that would be most relevant to them.
    
    Maintain a professional but friendly tone. Be concise and helpful, keeping answers under 150 words when possible.
    
    If asked about features outside your knowledge base, acknowledge the limitation and offer to connect them with a human representative.`;
    
    // Build the message array with conversation history
    let messages = [
      { role: "system", content: systemPrompt }
    ];
    
    // If we have conversation history, include it (but skip any system messages)
    if (conversationHistory && conversationHistory.length > 0) {
      // Add relevant conversation history
      messages = [
        ...messages,
        ...conversationHistory.filter(msg => msg.role !== "system")
      ];
    }
    
    // Add the current user query if it's not already in the history
    if (!messages.some(msg => msg.role === "user" && msg.content === userQuery)) {
      messages.push({ role: "user", content: userQuery });
    }
    
    try {
      const response = await this.sendChatCompletion(messages);
      
      if (response.error) {
        console.warn('Using fallback response due to error:', response.error);
        return response.fallbackResponse || 
               `I'm sorry, I couldn't process your request at the moment. Please try again later or contact support at ${this.supportEmail} if you need immediate assistance.`;
      }
      
      return response.choices[0]?.message?.content || 
             "I'm sorry, I couldn't generate a response. Please try asking a different question.";
    } catch (error) {
      console.error('Error generating response:', error);
      return this.getFallbackResponse(userQuery, validUserType);
    }
  }

  /**
   * Generate a fallback response when API fails
   * @param {string} query - The original user query
   * @param {string} userType - The type of user asking the question
   * @returns {string} - A fallback response tailored to user type when possible
   */
  getFallbackResponse(query = '', userType = '') {
    const lowerQuery = query.toLowerCase();
    
    // Common fallback responses
    if (lowerQuery.includes('earn') || lowerQuery.includes('payment') || lowerQuery.includes('money')) {
      return 'As an influencer, you can earn by successfully referring candidates to jobs. Payment ranges from ₹500 to ₹5000 per successful placement, depending on the position. Payments are processed every 15 days via direct bank transfer or digital wallets.';
    }
    
    if (lowerQuery.includes('register') || lowerQuery.includes('signup') || lowerQuery.includes('sign up')) {
      return 'You can register by clicking on the "Login/Sign Up" button. The process is quick and straightforward - just fill in your details and verify your account to get started.';
    }
    
    if (lowerQuery.includes('kyc') || lowerQuery.includes('verification')) {
      return 'The KYC process helps us verify your identity for secure payments. You\'ll need to provide basic ID proof and bank account details. This information is securely stored and only used for payment processing.';
    }
    
    // User type specific fallbacks
    if (userType === 'company') {
      return "I apologize for the inconvenience. Our platform connects your company with influencers who can help you find qualified candidates. Please contact our support team at connect@hirecentive.com for immediate assistance with your hiring needs.";
    } else if (userType === 'influencer') {
      return "I apologize for the technical issue. As an influencer, you can earn ₹500-₹5000 per successful job placement by sharing opportunities with your followers. For more details, please contact our support at connect@hirecentive.com.";
    } else if (userType === 'candidate') {
      return "I apologize for the interruption. Our platform connects job seekers like you with opportunities through social media influencers. For immediate assistance with finding a job, please contact our support team at connect@hirecentive.com.";
    }
    
    // Default response
    return "I apologize, but I'm currently unable to provide a detailed response. Please try again later or contact our support team at connect@hirecentive.com for immediate assistance.";
  }
}

export default new GroqService();