import React, { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { label: "About Us", id: "about-us" },
    { label: "Services", id: "services" },
    { label: "How-it-works", id: "how-it-works" },
    { label: "Success", id: "success" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact", id: "contact-us", hasIcon: true },
  ];

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-transparent " : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center">
          <div className="rounded-md bg-transparent backdrop-blur-md border border-slate-800 px-6 py-2 flex items-center">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="text-sm text-slate-300 hover:text-white px-4 py-1 transition-colors flex items-center"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {item.hasIcon && <ChevronRight className="ml-1 w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-black/90 backdrop-blur-md p-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left text-white text-lg py-2"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
