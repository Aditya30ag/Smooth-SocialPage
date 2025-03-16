import React from "react";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black py-10 px-6 md:px-12">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Tagline */}
        <p className="text-center text-lg text-slate-400 mb-6">
          <span className="font-semibold text-cyan-400">Empowering Communities,</span> One Job at a Time.
        </p>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left mb-8">
          
          {/* Brand Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text mb-4 md:mb-0">
            Hirecentive Social
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[Instagram, Linkedin, Twitter, Youtube].map((Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 text-slate-400 hover:text-cyan-400 transition-transform duration-300 cursor-pointer hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm text-slate-400 mb-6">
          {["About Us", "How It Works", "FAQs", "Contact Us"].map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section.toLowerCase().replace(/\s+/g, "-"))}
              className="hover:text-cyan-400 transition-colors cursor-pointer mb-2 md:mb-0"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-slate-500 text-center md:text-left">
          <div className="mb-3 md:mb-0">© 2024 Hirecentive. All rights reserved.</div>
          <div className="space-x-4">
            <a href="/privacypolicy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/tos" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
