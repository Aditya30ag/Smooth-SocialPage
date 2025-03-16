import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Footer from "./Footer";
import {
  DollarSign,
  Users,
  Building2,
  Award,
  Shield,
  Clock,
  Wallet,
} from "lucide-react";
import JobCategoriesSection from "./JobCategorySection";
import LocalStatsSection from "./LocalStatsSection";
// import SuccessStoriesSection from "./SuccessStoriesSection";
import QuickApplyProcess from "./QuickApplyProcess";
import Contact from "./Contact";
// import ParticleCanvas from "./ParticleCanvas";
import IntroAnimation from "./IntroAnimation ";
import FAQSection from "./Faq";
import Chatbot from "./Chatbot";
import AttentionHeatmap from "./HeatMap";
import CookiePolicy from "./CookiePolicy";
import ResponsiveNavbar from "./ResponsiveNavbar";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [Inview,setInView]=useState("");
  const stats = [
    { icon: DollarSign, value: "₹1.2 Cr+", label: "Paid to Influencers" },
    { icon: Users, value: "12,000+", label: "Successful Placements" },
    { icon: Building2, value: "500+", label: "Partner Companies" },
    { icon: Award, value: "92%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sahil Khan",
      role: "Tech Influencer",
      image: "/image1.png",
      quote:
        "Earned ₹35,000 in a month by helping 15 local drivers find work through Hirecentive Social.",
      earnings: "₹35,000",
      platform: "Instagram",
    },
    {
      name: "Rohan Iyer",
      role: "LinkedIn Thought Leader",
      image: "/image2.png",
      quote:
        "Assisted 20 local artisans in selling online, making ₹25,000 while supporting small businesses",
      earnings: "₹25,000",
      platform: "LinkedIn",
    },
    {
      name: "Priya Sharma",
      role: "Career Coach",
      image: "/image3.png",
      quote:
        "Connected 42 job seekers to retail jobs and grew her influence while earning ₹10,000 in rewards",
      earnings: "₹42,000",
      platform: "Instagram",
    },
  ];

  const trustBadges = [
    { icon: Shield, label: "256-bit Encryption" },
    { icon: Clock, label: "48h Payment Guarantee *" },
    { icon: Wallet, label: "Secure Transactions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Animate elements as they come into view
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id || Math.random().toString();
        
        if (sectionTop < window.innerHeight * 0.75 && !isVisible[sectionId]) {
          setIsVisible(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [isVisible]);

  // Animation variants for fade-in effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };
  
  // Staggered animation for lists
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Meta",
    "Apple",
    "Uber",
    "Airbnb",
    "Tesla",
    "Netflix",
    "Spotify",
    "Twitter",
    "LinkedIn",
    "Adobe",
    "Slack",
    "Zoom",
  ];
  
  // Custom hook for detecting when elements come into view
  const useScrollInView = () => {
    const controls = useAnimation();
    const [ref, inView] = useState(false);
    
    const checkIfInView = element => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8;
        if (isInView && !inView) {
          setInView(true);
          controls.start("visible");
        }
      }
    };
    
    return [ref, controls, checkIfInView];
  };
  
  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans overflow-hidden" id="home">
      <ResponsiveNavbar/>
      <IntroAnimation/>
      <CookiePolicy/>
      
      {/* Companies Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-8 bg-black/60 backdrop-blur-xl border-t border-b border-slate-800/50 overflow-hidden relative"
      >
        <div className="w-full overflow-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap min-w-full">
            {[...companies, ...companies].map((company, index) => (
              <span
                key={index}
                className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 hover:text-cyan-400 transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 md:px-24 relative" id="success">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/90 to-black blur-3xl"></div>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 sm:mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text"
        >
          Three Steps to Success
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 relative"
        >
          {[
            {
              title: "Unlock Opportunities",
              description:
                "Register to get your unique link and share it with your followers.",
              icon: "🔗",
            },
            {
              title: "Help Build Connections",
              description:
                "Help job seekers connect with local employers looking for their skills.",
              icon: "📱",
            },
            {
              title: "Earn Incentives!",
              description:
                "Get paid for every successful hire through your link. No limits on earning potential!",
              icon: "💸",
            },
          ].map((step, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group relative h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Consistent hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-black/80 rounded-xl p-6 sm:p-8 md:p-10 border border-slate-800 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <motion.div 
                    className="text-4xl sm:text-5xl mb-4 sm:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 sm:mt-16"
        >
          <p className="relative text-center text-lg md:text-2xl font-bold text-gray-400 mt-20 max-w-2xl mx-auto leading-relaxed">
            Every connection you create not only makes an impact but also rewards you with incentives while making a difference.
          </p>
        </motion.div>
      </section>
          
      <LocalStatsSection />
      
      {/* Testimonials Section */}
      <section className="py-14 relative font-inter">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black blur-2xl"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-24 relative">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative text-4xl md:text-6xl p-4 font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text"
          >
            Real Stories, Real Impact
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8 items-stretch"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full"
              >
                {/* Consistent outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>

                {/* Card container with consistent hover effect */}
                <div className="relative bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-5">
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow-lg"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-lg text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 italic flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-400 font-bold text-lg">
                      {testimonial.earnings}/month
                    </div>
                    <div className="text-slate-400 text-sm">
                      via {testimonial.platform}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Categories Section */}
      <JobCategoriesSection />

      {/* <SuccessStoriesSection/> */}
      <QuickApplyProcess />
      
      {/* Registration Form */}
      <Contact />

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Gradient */}
      </section>

      {/* Trust Badges */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-24 ">
          <div className="flex justify-center space-x-8">
            {trustBadges.map((badge, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1 }}
                className="flex items-center text-slate-400 group transition-all duration-300 hover:text-cyan-400"
              >
                <badge.icon className="w-5 h-5 mr-2 transition-all duration-300" />
                <span className="text-sm">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQSection/>
      {/* Footer */}
      <Footer />
      {/* <AttentionHeatmap/> */}
      <Chatbot/>
            
      
      
      {/* Parallax effect for background elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
          opacity: useTransform(scrollY, [0, 1000], [1, 0.3])
        }}
      />
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: black;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Reveal animations */
        .reveal {
          position: relative;
          opacity: 0;
          transition: all 1s ease;
        }
        
        .reveal.active {
          opacity: 1;
        }
        
        .reveal.from-bottom {
          transform: translateY(50px);
        }
        
        .reveal.from-bottom.active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;