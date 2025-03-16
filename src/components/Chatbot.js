import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, ArrowLeft } from 'lucide-react';
import GroqService from './GroqService';

// FAQ data with useful answers
const FAQS = {
  "How can I earn?": `As an influencer on Hirecentive, you can earn by:
• Sharing job opportunities with your network
• Getting paid per successful referral
• Earning bonuses for high-quality candidates
• Participating in special hiring campaigns`,
  
  "What companies can I work with?": `You can work with:
• Fortune 500 companies
• Fast-growing startups
• Tech companies
• Multiple companies simultaneously
All companies are pre-vetted to ensure quality opportunities.`,
  
  "Registration process": `The registration process is simple:
1. Fill out your profile
2. Verify your social media accounts
3. Complete our brief platform training
4. Start sharing opportunities`,
  
  "Payment details": `We offer flexible payment options:
• Direct bank transfers
• Digital wallets
• International payments supported
• Payments processed every 15 days`,
  
  "What type of content should I share?": `You can share:
• Job postings
• Company culture insights
• Interview tips
• Industry insights
All content is provided by us - no need to create your own!`
};

// Navigation links for pages
const NAVIGATION_LINKS = {
  LOGIN_SIGNUP: '/auth',
  KYC_FORM: '/kyc-form',
  INFLUENCER_DASHBOARD: '/influencer-dashboard',
  CANDIDATE_REGISTRATION: '/candidate-registration'
};

const USER_TYPES = {
  COMPANY: 'company',
  INFLUENCER: 'influencer',
  CANDIDATE: 'candidate'
};

// Simple components for chat UI
const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`${isUser ? 'bg-violet-500/20 border-violet-500/50' : 'bg-cyan-500/20 border-cyan-500/50'} 
                     border rounded-lg p-3 max-w-[80%] break-words`}>
      <p className="text-white text-sm whitespace-pre-line">{message}</p>
    </div>
  </div>
);

const ChatOptions = ({ options, onSelect }) => (
  <div className="flex flex-col gap-2 mb-4">
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onSelect(option)}
        className="bg-gradient-to-r from-cyan-400/20 to-violet-500/20 border border-cyan-500/50 
                   hover:border-violet-500/50 rounded-lg p-3 text-white text-sm text-left
                   transition-all duration-300 hover:scale-[1.02]"
      >
        {option}
      </button>
    ))}
  </div>
);

const ContactForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name *"
        required
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
      />
      <input
        type="email"
        placeholder="Email Address *"
        required
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        type="tel"
        placeholder="Phone Number *"
        required
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
      />
      <textarea
        placeholder="Your Message *"
        required
        rows={3}
        className="w-full bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                  text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg px-4 py-2 
                    text-white hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-slate-700 rounded-lg text-slate-300 
                    hover:bg-slate-700/50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default function Chatbot() {
  // Core state
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [aiMode, setAiMode] = useState(false);
  const [aiContext, setAiContext] = useState([]);
  
  // Navigation and history
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Function to handle navigation
  const navigateToPage = (path) => {
    window.location.href = path;
  };

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save chat state to history
  const saveToHistory = () => {
    setChatHistory(prev => [...prev, {
      messages: [...messages],
      options: [...currentOptions],
      userType,
      showContactForm,
      aiMode,
      aiContext: [...aiContext]
    }]);
  };

  // Add message with typing effect
  const addMessageWithDelay = (message, isUser = false) => {
    setIsTyping(true);
    const delay = Math.min(message.length * 10, 600);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: message, isUser }]);
      setIsTyping(false);
    }, delay);

    // Also add to AI context if we're maintaining conversation
    if (aiMode && !isUser) {
      setAiContext(prev => [...prev, { role: "assistant", content: message }]);
    }
  };
  
  // Navigation: go back
  const handleBack = () => {
    if (chatHistory.length > 0) {
      const previousState = chatHistory[chatHistory.length - 1];
      setMessages(previousState.messages);
      setCurrentOptions(previousState.options);
      setUserType(previousState.userType);
      setShowContactForm(previousState.showContactForm);
      setAiMode(previousState.aiMode);
      setAiContext(previousState.aiContext || []);
      setChatHistory(prev => prev.slice(0, -1));
    } else {
      resetChat();
    }
  };
  
  // Reset chat to initial state
  const resetChat = () => {
    setMessages([]);
    setCurrentOptions([]);
    setUserType(null);
    setShowContactForm(false);
    setAiMode(false);
    setAiContext([]);
    setIsInitialized(false);
    initializeChat();
  };
  
  // Initialize chat with welcome message
  const initializeChat = () => {
    if (!isInitialized && isOpen) {
      addMessageWithDelay("Welcome to Hirecentive! Please select who you are:");
      setCurrentOptions([
        "I'm a company hiring",
        "I'm an influencer",
        "I'm looking for a job"
      ]);
      setIsInitialized(true);
    }
  };
  
  useEffect(() => {
    initializeChat();
  }, [isOpen, isInitialized]);

  // Get the user type as a string for context
  const getUserTypeString = () => {
    return userType === USER_TYPES.COMPANY ? 'company' : 
           userType === USER_TYPES.INFLUENCER ? 'influencer' : 
           userType === USER_TYPES.CANDIDATE ? 'candidate' : 'unknown';
  };

  // Handle user type selection
  const handleUserTypeSelection = (selection) => {
    saveToHistory();
    
    let type;
    let response;
    let nextOptions;
    
    switch (selection) {
      case "I'm a company hiring":
        type = USER_TYPES.COMPANY;
        response = "Great! You can register your company to start hiring through our network of influencers.";
        nextOptions = ["Login/Sign Up", "Learn More", "Contact Support", "Ask AI Assistant", "Back to Main Menu"];
        break;
      case "I'm an influencer":
        type = USER_TYPES.INFLUENCER;
        response = "Welcome! Let me help you understand how you can earn with Hirecentive.";
        nextOptions = [
          "Login/Sign Up",
          "Complete KYC",
          "Go to Dashboard",
          "How can I earn?",
          "What companies can I work with?",
          "Registration process",
          "Payment details",
          "What type of content should I share?",
          "Ask AI Assistant",
          "Contact Support",
          "Back to Main Menu"
        ];
        break;
      case "I'm looking for a job":
        type = USER_TYPES.CANDIDATE;
        response = "Great! You can register to browse opportunities and connect with our network of influencers.";
        nextOptions = ["Register Now!", "Login/Sign Up", "Ask AI Assistant", "Contact Support", "Back to Main Menu"];
        break;
      default:
        type = null;
        response = "I'm not sure I understood. Please select one of the options below.";
        nextOptions = [
          "I'm a company hiring",
          "I'm an influencer",
          "I'm looking for a job"
        ];
    }

    setUserType(type);
    setMessages(prev => [...prev, { text: selection, isUser: true }]);
    addMessageWithDelay(response);
    setCurrentOptions(nextOptions);
  };

  // Return to main menu
  const handleMainMenuReturn = () => {
    saveToHistory();
    resetChat();
  };

  // Handle contact form submission
  const handleContactFormSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    saveToHistory();
    setShowContactForm(false);
    addMessageWithDelay(`Thank you for reaching out, ${formData.name}! We'll contact you soon at ${formData.email}`);
    setCurrentOptions(["Back to Main Menu"]);
  };

  // Handle AI input
  const handleAIInput = async (e) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    const userMessage = userInput.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setUserInput('');
    setIsTyping(true);
    
    // Add user message to AI context
    const updatedContext = [...aiContext, { role: "user", content: userMessage }];
    setAiContext(updatedContext);
    
    try {
      const userTypeString = getUserTypeString();
      
      // Generate AI response using the userType context
      const aiResponse = await GroqService.generateHirecentiveResponse(
        userMessage, 
        userTypeString,
        updatedContext.length > 4 ? updatedContext.slice(-4) : []  // Pass recent context for continuity
      );
      
      setTimeout(() => {
        setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
        setAiContext(prev => [...prev, { role: "assistant", content: aiResponse }]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setTimeout(() => {
        const errorMessage = "I'm sorry, I'm having trouble connecting to AI services. Please try again or select one of the options below.";
        setMessages(prev => [...prev, { text: errorMessage, isUser: false }]);
        setAiContext(prev => [...prev, { role: "assistant", content: errorMessage }]);
        setIsTyping(false);
      }, 500);
    }
  };

  // Get options based on user type
  const getOptionsForUserType = () => {
    if (userType === USER_TYPES.INFLUENCER) {
      return [
        "Login/Sign Up",
        "Complete KYC",
        "Go to Dashboard",
        "How can I earn?",
        "What companies can I work with?",
        "Registration process",
        "Payment details",
        "What type of content should I share?",
        "Ask AI Assistant",
        "Contact Support",
        "Back to Main Menu"
      ];
    } else if (userType === USER_TYPES.CANDIDATE) {
      return [
        "Register Now!",
        "Login/Sign Up",
        "Ask AI Assistant",
        "Contact Support", 
        "Back to Main Menu"
      ];
    } else if (userType === USER_TYPES.COMPANY) {
      return [
        "Login/Sign Up",
        "Learn More",
        "Ask AI Assistant",
        "Contact Support", 
        "Back to Main Menu"
      ];
    } else {
      return [
        "I'm a company hiring",
        "I'm an influencer",
        "I'm looking for a job"
      ];
    }
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    saveToHistory();
    setMessages(prev => [...prev, { text: option, isUser: true }]);
    
    switch (option) {
      case "Contact Support":
        addMessageWithDelay("Please fill out the form below and we'll get back to you soon.");
        setShowContactForm(true);
        setCurrentOptions([]);
        break;

      case "Ask AI Assistant":
        // Initialize AI context with user type
        const userTypeString = getUserTypeString();
        const welcomeMessage = "You're now chatting with our AI assistant. Ask any questions about Hirecentive, and I'll do my best to help!";
        
        // Set up initial AI context with user type information
        setAiContext([
          { role: "system", content: `The user is a ${userTypeString} using Hirecentive.` },
          { role: "assistant", content: welcomeMessage }
        ]);
        
        addMessageWithDelay(welcomeMessage);
        setAiMode(true);
        setCurrentOptions(["Back to Menu Options"]);
        setTimeout(() => inputRef.current?.focus(), 600);
        break;

      case "Back to Menu Options":
        setAiMode(false);
        setAiContext([]);
        setCurrentOptions(getOptionsForUserType());
        break;

      case "Back to Main Menu":
        handleMainMenuReturn();
        break;

      case "Learn More":
        addMessageWithDelay("Our platform connects you with a network of influencers who can help you find the best candidates. Register to get started.");
        setCurrentOptions(["Login/Sign Up", "Contact Support", "Back to Main Menu"]);
        break;

      case "Login/Sign Up":
        addMessageWithDelay("Taking you to the login/sign up page...");
        setTimeout(() => navigateToPage(NAVIGATION_LINKS.LOGIN_SIGNUP), 1000);
        break;

      case "Complete KYC":
        addMessageWithDelay("Redirecting you to the KYC form...");
        setTimeout(() => navigateToPage(NAVIGATION_LINKS.KYC_FORM), 1000);
        break;

      case "Go to Dashboard":
        addMessageWithDelay("Taking you to your influencer dashboard...");
        setTimeout(() => navigateToPage(NAVIGATION_LINKS.INFLUENCER_DASHBOARD), 1000);
        break;

      case "Register Now!":
        addMessageWithDelay("Taking you to the candidate registration form...");
        setTimeout(() => navigateToPage(NAVIGATION_LINKS.CANDIDATE_REGISTRATION), 1000);
        break;

      default:
        if (FAQS[option]) {
          addMessageWithDelay(FAQS[option]);
          setCurrentOptions([
            ...Object.keys(FAQS).filter(faq => faq !== option),
            ...["Ask AI Assistant", "Contact Support", "Back to Main Menu"]
          ]);
        } else {
          addMessageWithDelay("I don't have information on that topic yet. Is there something else I can help you with?");
          setCurrentOptions(getOptionsForUserType());
        }
    }
  };
  
  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-900 to-cyan-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute left-full ml-2 bg-black px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with Support
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] 
                        bg-black/90 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl 
                        flex flex-col overflow-hidden animate-slide-up z-50">

          {/* Header */}
          <div className="p-4 border-b border-slate-800 bg-gradient-to-r from-cyan-400/10 to-violet-500/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {chatHistory.length > 0 && (
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors bg-black/20 py-1 px-2 rounded-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Back</span>
                  </button>
                )}
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {aiMode ? "AI Assistant" : "Hirecentive Assistant"}
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message.text} isUser={message.isUser} />
            ))}
            
            {isTyping && (
              <div className="flex gap-2 text-slate-400 items-center">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-800">
            {showContactForm ? (
              <ContactForm 
                onSubmit={handleContactFormSubmit}
                onCancel={() => {
                  setShowContactForm(false);
                  setCurrentOptions(getOptionsForUserType());
                }}
              />
            ) : (
              <>
                {currentOptions.length > 0 && !aiMode && (
                  <ChatOptions 
                    options={currentOptions} 
                    onSelect={userType ? handleOptionSelect : handleUserTypeSelection} 
                  />
                )}
                {aiMode && (
                  <form onSubmit={handleAIInput} className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Ask anything about Hirecentive..."
                      className="flex-1 bg-black/60 border border-slate-700 rounded-lg px-4 py-2 
                              text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-2 
                                text-white hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
          
          {/* Footer with AI indicator */}
          {aiMode && (
            <div className="px-4 py-2 text-xs text-slate-500 border-t border-slate-800 flex items-center justify-center">
              <span>Powered by Llama 3.2 • Groq API</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}