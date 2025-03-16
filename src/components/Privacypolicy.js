import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronUp } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const contentRefs = useRef({});
  const [overflowSections, setOverflowSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved overflow detection
  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowSections = {};
      Object.keys(contentRefs.current).forEach((id) => {
        const element = contentRefs.current[id];
        if (element) {
          // Create a temporary clone to measure full height
          const clone = element.cloneNode(true);
          clone.style.position = "absolute";
          clone.style.visibility = "hidden";
          clone.style.height = "auto";
          clone.style.maxHeight = "none";
          clone.style.lineClamp = "none";
          clone.style.webkitLineClamp = "none";
          document.body.appendChild(clone);

          const fullHeight = clone.offsetHeight;
          document.body.removeChild(clone);

          // Get the height of 4 lines (approximate)
          const lineHeight = parseInt(
            window.getComputedStyle(element).lineHeight
          );
          const clampedHeight = lineHeight * 4;

          newOverflowSections[id] = fullHeight > clampedHeight;
        }
      });
      setOverflowSections(newOverflowSections);
    };

    // Initial check
    checkOverflow();

    // Check on window resize
    window.addEventListener("resize", checkOverflow);

    // Check when search term changes (filtered content might change)
    const timeoutId = setTimeout(checkOverflow, 100);

    return () => {
      window.removeEventListener("resize", checkOverflow);
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `Welcome to Hirecentive Social, operated by Hirecentive Network Technologies LLP, a company registered in Karnataka, India ("Company," "we," "us," or "our"). This Privacy Policy explains how we collect, use, store, process, and protect your personal data when you use our platform ("Platform"). By accessing or using our Platform, you consent to the practices described in this Privacy Policy. If you do not agree, you must discontinue use immediately.

      This Policy complies with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Consumer Protection Act, 2019, and other applicable Indian laws, including forthcoming data privacy regulations.`,
    },
    {
      id: 2,
      title: "Information We Collect",
      content: `We collect the following types of information:
      A. Personal Information:
      • Full Name, Date of Birth, Gender
      • Contact Details (Email Address, Phone Number, Address)
      • Social Media Profiles (for Influencers)
      • Employment Information (Work Experience, Skills, Education, Resume, Job Preferences)
      • Bank or Payment Information (for incentive disbursements)
      • Identification Documents (as required by law for verification)
      
      B. Non-Personal Information:
      • IP Address, Browser Type, Device Information
      • Cookies, Tracking Technologies, and Usage Data
      • Aggregated Data (Non-identifiable user trends)`,
    },
    {
      id: 3,
      title: "How We Collect Your Information",
      content: `We collect your data through multiple channels, including:
      • Directly from you when you sign up, update your profile, or communicate with us.
      • Automatically through cookies, tracking technologies, and analytics tools.
      • From third-party sources such as employer verification databases, recruitment partners, and publicly available sources.`,
    },
    {
      id: 4,
      title: "How We Use Your Information",
      content: `We use your data for the following purposes:
      • Job Matching & Recruitment
      • Influencer Incentives
      • Verification & Security
      • Marketing & Communication
      • Personalization & Analytics
      • Legal & Regulatory Compliance`,
    },
    {
      id: 5,
      title: "Data Sharing & Disclosure",
      content: `We may share your data with:
      • Employers & Recruiters
      • Payment Processors
      • Legal & Regulatory Authorities
      • Service Providers & Partners
      • Affiliated Companies & Business Transfers
      We do not sell or rent your personal data to third parties.`,
    },
    {
      id: 6,
      title: "Data Security & Protection",
      content: `We implement strict security measures to safeguard your data, including:
      • Encryption
      • Access Controls
      • Firewalls & Intrusion Detection
      • Regular Security Audits
      • Incident Response Protocols.`,
    },
    {
      id: 7,
      title: "User Rights & Choices",
      content: `Under applicable data protection laws, you have the right to:
      • Access & Review your data
      • Correct & Update inaccurate data
      • Request Deletion & Restriction
      • Opt-Out of Marketing
      • Request Data Portability
      Contact us at connect@hirecentive.com for requests.`,
    },
    {
      id: 8,
      title: "Cookies & Tracking Technologies",
      content: `We use cookies to enhance user experience and analyze Platform performance:
        • Essential Cookies: Necessary for platform functionality.
        • Analytics Cookies: Track usage patterns to improve services.
        • Marketing Cookies: Provide personalized job recommendations.
        You can modify cookie preferences via browser settings.`,
    },
    {
      id: 9,
      title: "Third-Party Links & Services",
      content: `Our Platform may contain links to third-party websites. We are not responsible for their privacy practices, and users should review external policies independently.`,
    },
    {
      id: 10,
      title: "International Data Transfers",
      content: `Your data may be processed outside of India in compliance with applicable laws and safeguards.`,
    },
    {
      id: 11,
      title: "Children's Privacy",
      content: `Our Platform is not intended for users under 18. We do not knowingly collect data from minors. If discovered, such data will be deleted immediately.`,
    },
    {
      id: 12,
      title: "Legal Compliance & Dispute Resolution",
      content: `• Governing Law: This Privacy Policy is governed by the laws of India.
        • Jurisdiction: Any disputes will be resolved exclusively in the courts of Karnataka, India.
        • Dispute Resolution: We encourage users to contact us directly in case of disputes before pursuing legal actions.`,
    },
    {
      id: 13,
      title: "Policy Updates & Changes",
      content: `We may update this Privacy Policy periodically. Users will be notified of significant changes, and continued use of the Platform constitutes acceptance of the updated terms.`,
    },
    {
      id: 14,
      title: "Contact Information",
      content: `For any privacy-related inquiries, contact us at:
        • Email: connect@hirecentive.com
        • Address: Hirecentive Network Technologies LLP, Mangalore - 575004.
        • Grievance Officer:
        • Email: connect@hirecentive.com
        By using Hirecentive Social, you acknowledge that you have read, understood, and agreed to this Privacy Policy in full.`,
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="min-h-full bg-gradient-to-b from-black via-slate-900/100 to-black py-4 sm:py-8 md:py-14 px-3 sm:px-6 md:px-12 lg:px-24">
        <ParticleCanvas />
        {/* Home Link */}
        <div className="fixed top-4 left-4 sm:top-8 sm:left-8 z-50">
          <Link to="/" className="block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/9e8806_f802bd961b9a4c20995641de0ba09cf0~mv2.png"
                  alt="Hirecentive Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
            Hirecentive
          </h1>
          <h2 className="text-2xl p-4 sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
            Privacy Policy
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. Read how we protect your data.
          </p>
        </header>

        {/* Search Bar */}
        <section className="mb-6 sm:mb-8 relative z-10">
          <div className="relative max-w-xl mx-auto px-2 sm:px-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search privacy policy..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 sm:py-3 pl-10 rounded-lg bg-black/60 border border-gray-700 
                    focus:ring-2 focus:ring-cyan-400 outline-none text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <Search className="absolute left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="relative px-2 sm:px-4">
                    <div className="relative bg-black/50 backdrop-blur-lg p-3 sm:p-4 rounded-lg border border-gray-800 shadow-lg">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {filteredSections.map((section) => {
                          const isExpanded = expandedSections[section.id];
                          return (
                            <article key={section.id} className="group relative">
                              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                              <div className="relative bg-black/50 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-gray-800 shadow-lg h-full flex flex-col">
                                <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text mb-3 sm:mb-4">
                                  {typeof section.id === "number" && section.id}{" "}
                                  {section.title}
                                </h3>
                                <div
                                  ref={(el) => (contentRefs.current[section.id] = el)}
                                  className={`text-gray-300 text-sm sm:text-base whitespace-pre-line leading-relaxed ${
                                    isExpanded ? "" : "line-clamp-4"
                                  }`}
                                >
                                  {section.content}
                                </div>
                                {overflowSections[section.id] && (
                                  <button
                                    onClick={() => toggleSection(section.id)}
                                    className="mt-3 sm:mt-4 text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base flex items-center gap-1"
                                  >
                                    {isExpanded ? "Read Less" : "Read More"}
                                    <ChevronUp
                                      className={`w-4 h-4 transition-transform ${
                                        isExpanded ? "" : "rotate-180"
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  </main>
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 rounded-lg shadow-md mt-4">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1 sm:mb-2">
                Contact Us
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Last updated on 27-02-2025 13:01:25
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base">
                      Registered Address
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base break-words">
                      3-27-2232/7 kaustubha new layout, kadri kambla, bijai s.o,
                      <br />
                      Mangalore, Karnataka, India
                      <br />
                      PIN: 575004
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base">
                      Telephone
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a
                        href="tel:8762418348"
                        className="hover:text-cyan-600 transition-colors"
                      >
                        8762418348
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6 text-end flex flex-col items-end">
                <div className="flex items-end space-x-3 sm:space-x-4 justify-end">
                  <div className="flex-1 text-end">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base flex items-center justify-end space-x-2">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500" />
                      <span>Email Us</span>
                    </h3>
                    <div className="text-sm sm:text-base">
                      
                      <p className="mt-1 sm:mt-2">
                        <a
                          href="mailto:connect@hirecentive.com"
                          className="text-cyan-600 hover:text-cyan-700 transition-colors"
                        >
                          connect@hirecentive.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">
                      <span className="text-cyan-500 font-bold">•</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-cyan-500 text-sm sm:text-base">
                      Legal Entity
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base break-words">
                      HIRECENTIVE NETWORK TECHNOLOGIES LLP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Optional */}
            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                For any inquiries, feel free to reach out to us.
              </p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
