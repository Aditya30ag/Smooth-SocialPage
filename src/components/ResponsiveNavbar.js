import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about-us");
  const navRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { label: "About Us", id: "about-us" },
    { label: "Services", id: "services" },
    { label: "How-it-works", id: "how-it-works" },
    { label: "Success", id: "success" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact", id: "contact-us", hasIcon: true },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Determine which section is currently in view
      const sections = navItems.map((item) => document.getElementById(item.id));
      const validSections = sections.filter((section) => section !== null);

      if (validSections.length > 0) {
        const windowHeight = window.innerHeight;
        const sectionInView = validSections.find((section) => {
          const rect = section.getBoundingClientRect();
          return (
            rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3
          );
        });

        if (sectionInView) {
          setActiveSection(sectionInView.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-slate-900/30 backdrop-blur-md border border-slate-800 px-1 py-1 rounded-full shadow-lg flex items-center relative">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={index}
                    ref={(el) => (navRefs.current[item.id] = el)}
                    className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                    {item.hasIcon && (
                      <ChevronRight className="ml-1 w-4 h-4 inline" />
                    )}

                    {isActive && (
                      <motion.div
                        layoutId="desktop-active-indicator"
                        className="absolute inset-0 bg-slate-700/50 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-t-full">
                          <div className="absolute w-12 h-6 bg-violet-500/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-cyan-400/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-amber-400/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`fixed top-6 right-8 z-50 transition-all duration-300 md:hidden ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded-lg backdrop-blur-md border border-slate-800 bg-slate-900/30 shadow-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu - Animated dropdown */}
        {isMenuOpen && (
          <motion.div 
            className="absolute top-16 right-0 w-64 bg-transparent backdrop-blur-md border border-slate-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={index}
                    className={`relative cursor-pointer text-sm font-semibold px-4 py-3 rounded-lg text-left transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      {item.hasIcon ? (
                        <ChevronRight className="ml-1 w-4 h-4" />
                      ) : null}
                    </div>
                    
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-indicator"
                        className="absolute inset-0 bg-slate-700/50 rounded-lg -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 via-violet-500 to-amber-400 rounded-r-full">
                          <div className="absolute h-12 w-6 bg-violet-500/20 rounded-full blur-md -left-2 -top-2" />
                          <div className="absolute h-8 w-6 bg-cyan-400/20 rounded-full blur-md -left-1" />
                          <div className="absolute h-4 w-4 bg-amber-400/20 rounded-full blur-sm top-2" />
                        </div>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
