import React, { useEffect, useState } from 'react';
import { Building2, Users, Heart, Star, TrendingUp, ExternalLink, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import ParticleCanvas from './ParticleCanvas';
import {Link} from "react-router-dom";

const IntroAnimation = () => {
    const [currentScene, setCurrentScene] = useState(0);

    const [direction, setDirection] = useState('right');
    
    useEffect(() => {
    
        const timer = setInterval(() => {
          setCurrentScene(prev => (prev + 1) % scenes.length);
          setDirection('right');
        }, 4000);
        return () => clearInterval(timer);
      }
    );
  
    const goToSlide = (index) => {
      setDirection(index > currentScene ? 'right' : 'left');
      setCurrentScene(index);
    };
  
    const prevSlide = () => {
      setDirection('left');
      setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
    };
  
    const nextSlide = () => {
      setDirection('right');
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    };

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  
    const scenes = [
      {
        content: (
          <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 animate-slide-up">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl xl:text-[10rem] font-bold transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text animate-gradient-x">
                Hirecentive
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-cyan-400 animate-bounce-slow">
              Social
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="text-center px-4 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text leading-tight mb-4 sm:mb-6 animate-gradient-x">
              Your Influence,
              <br />
              Their Future
            </h1>
          </div>
        )
      },
      {
        content: (
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 max-w-6xl mx-auto px-4 animate-slide-up">
            <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300 flex items-center justify-center flex-col">
              <Building2 className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-violet-500 mb-4 sm:mb-6 mx-auto md:mx-0 " />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Local Businesses</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300">Struggling to find reliable employees</p>
            </div>
            <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300 flex items-center justify-center flex-col">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-cyan-400 mb-4 sm:mb-6 mx-auto md:mx-0 " />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Your Followers</h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300">Looking for job opportunities</p>
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="max-w-6xl mx-auto text-center space-y-10 sm:space-y-14 px-4 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-pulse">
              Earn <span className="text-cyan-400">₹500-₹5000</span> Per Placement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
              {[
                { icon: Heart, color: "text-cyan-400", label: "Make an Impact" },
                { icon: Star, color: "text-violet-500", label: "Build Trust" },
                { icon: TrendingUp, color: "text-amber-400", label: "Earn More" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group transform hover:scale-110 transition-all duration-300"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-slate-800">
                    <div className="flex flex-col items-center">
                      <item.icon className={`w-12 h-12 sm:w-16 sm:h-16 ${item.color} mb-4 sm:mb-6 `} />
                      <span className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-medium">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        content: (
          <div className="text-center max-w-4xl mx-auto px-4 animate-slide-up">
            <div className="transform transition-all duration-300 hover:scale-105">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text animate-gradient-x">
                Join the Movement
              </h2>
              <button className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-300 hover:scale-110 animate-pulse" onClick={() => scrollToSection("contact-us")}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl"></div>
                <div className="absolute inset-0.5 bg-black rounded-xl"></div>
                <span className="relative z-10 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  Get Your Unique Link
                  <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400  group-hover:translate-x-2" />
                </span>
              </button>
            </div>
          </div>
        )
      }
    ];
    

    // Function to scroll down to content below the intro animation
    const scrollToContent = () => {
      // This will scroll to the next section that comes after the intro animation
      // You can adjust this to target a specific element ID
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };
    return (
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <ParticleCanvas />
        
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400 via-transparent to-transparent animate-pulse"></div>
        </div>
        <div className="fixed top-8 left-8 z-50 animate-fade-in">
          <Link to="/" onClick={() => scrollToSection("home")}>
          <div className="relative group" >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
              {/* Replace with your actual logo or initial */}
              
              {/* Uncomment and use this for an actual image logo */}
              <img src="/9e8806_f802bd961b9a4c20995641de0ba09cf0~mv2.png" alt="Hirecentive Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          </Link>
        </div>
        <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-slate-700 hover:bg-black/50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-slate-700 hover:bg-black/50 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="absolute top-10 right-8 z-50">
          <div className="text-center">
            <a href='http://Social.hirecntice.com/login' target="_blank" rel="noreferrer">
              <button className="group relative px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
                <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  Login
                  
                </span>
              </button>
              </a>
            </div>
          </div>

          <div className={`w-full transition-all duration-500 transform 
            ${direction === 'right' ? 
              (currentScene === 0 ? 'animate-slide-left-enter' : 'animate-slide-right-enter') : 
              'animate-slide-left-enter'}`}
          >
            {scenes[currentScene].content}
          </div>
        </div>
    
        {/* Progress Indicators */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {scenes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80
                ${index === currentScene ? 
                  'w-8 sm:w-10 bg-gradient-to-r from-cyan-400 to-violet-500 animate-pulse' : 
                  'w-1.5 sm:w-2 bg-slate-700'}`}
            />
          ))}
        </div>
        <div 
          onClick={scrollToContent}
          className="absolute bottom-20 sm:bottom-16 right-8 sm:right-20 cursor-pointer z-30 animate-bounce-slow flex flex-col items-center justify-center group"
        >
          <span className="text-xs sm:text-sm text-slate-300 opacity-80 mb-1 group-hover:text-cyan-400 transition-colors duration-300 text-center">
            Scroll
          </span>
          <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm border border-slate-700 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div>
        <style>{`
          @keyframes slide-right-enter {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-left-enter {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-right-exit {
            0% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(-50px); }
          }
          @keyframes slide-left-exit {
            0% { opacity: 1; transform: translateX(0); }
            100% { opacity: 0; transform: translateX(50px); }
          }
          .animate-slide-right-enter {
            animation: slide-right-enter 0.5s ease-out forwards;
          }
          .animate-slide-left-enter {
            animation: slide-left-enter 0.5s ease-out forwards;
          }
          .animate-slide-right-exit {
            animation: slide-right-exit 0.5s ease-out forwards;
          }
          .animate-slide-left-exit {
            animation: slide-left-exit 0.5s ease-out forwards;
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          . {
            animation: float 3s ease-in-out infinite;
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
};

export default IntroAnimation;