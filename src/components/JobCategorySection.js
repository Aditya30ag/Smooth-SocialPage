import React, { useState, useRef } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const JobCategoriesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setShowAll(!showAll);
    // if (showAll) {
    //   // Scroll with offset and smooth behavior
    //   const yOffset = -20; // Adjust this value based on your header height
    //   const element = sectionRef.current;
    //   const y =
    //     element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    //   window.scrollTo({
    //     top: y,
    //     behavior: "smooth",
    //   });
    // }
  };

  const localJobs = [
    {
      category: "Retail & Shops",
      roles: ["Store Staff", "Cashiers", "Inventory Managers"],
      icon: "🏪",
      count: "2,000+ jobs",
    },
    {
      category: "Hospitality",
      roles: ["Restaurant Staff", "Hotel Staff", "Cafe Workers"],
      icon: "🏨",
      count: "1,500+ jobs",
    },
    {
      category: "Local Services",
      roles: ["Delivery Partners", "Field Sales", "Customer Service"],
      icon: "🛵",
      count: "3,000+ jobs",
    },
    {
      category: "Office Jobs",
      roles: ["Data Entry", "Back Office", "Reception"],
      icon: "💼",
      count: "1,000+ jobs",
    },
    {
      category: "Manufacturing",
      roles: ["Factory Workers", "Supervisors", "Quality Check"],
      icon: "🏭",
      count: "2,500+ jobs",
    },
    {
      category: "Education & Tutoring",
      roles: ["Home Tutors", "Coaching Staff", "School Assistants"],
      icon: "📚",
      count: "800+ jobs",
    },
    // Additional job categories
    {
      category: "Healthcare",
      roles: ["Clinic Assistants", "Care Workers", "Medical Admin"],
      icon: "🏥",
      count: "1,200+ jobs",
    },
    {
      category: "Beauty & Wellness",
      roles: ["Salon Staff", "Spa Therapists", "Fitness Trainers"],
      icon: "💅",
      count: "900+ jobs",
    },
    {
      category: "Security",
      roles: ["Security Guards", "Night Watch", "Building Security"],
      icon: "🛡️",
      count: "700+ jobs",
    },
    {
      category: "Logistics",
      roles: ["Warehouse Staff", "Packers", "Stock Controllers"],
      icon: "📦",
      count: "1,800+ jobs",
    },
    {
      category: "Transportation",
      roles: ["Drivers", "Fleet Staff", "Transport Coordinators"],
      icon: "🚗",
      count: "1,300+ jobs",
    },
    {
      category: "Events & Entertainment",
      roles: ["Event Staff", "Promoters", "Venue Assistants"],
      icon: "🎪",
      count: "500+ jobs",
    },
  ];

  const displayedJobs = showAll ? localJobs : localJobs.slice(0, 6);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 relative font-sans scroll-mt-24" id="services">
      {/* Background Gradient */}
      <div
        ref={sectionRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black blur-3xl"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
          Help To Find Local Jobs Near You
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-2xl font-bold text-gray-400 mt-10 max-w-2xl mx-auto mb-12">
          Connect your followers to find opportunities in your neighborhood. No complex requirements,
          start working within 48 hours.
*        </p>

        {/* Job Cards - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {displayedJobs.map((job, index) => (
            <div key={index} className="group relative">
              {/* Gradient Background Hover Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-black rounded-xl p-6 md:p-8 border border-slate-800 hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg shadow-md h-full flex flex-col">
                {/* Top Section */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl md:text-3xl">{job.icon}</div>
                  <div className="text-[10px] md:text-xs font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
                    {job.count}
                  </div>
                </div>

                {/* Job Category */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {job.category}
                </h3>

                {/* Job Roles */}
                <ul className="space-y-2 md:space-y-3 flex-grow">
                  {job.roles.map((role, roleIndex) => (
                    <li
                      key={roleIndex}
                      className="text-slate-300 flex items-center group/item"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 transition-transform group-hover/item:translate-x-1" />
                      <span className="font-medium text-sm md:text-base">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {localJobs.length > 6 && (
          <div className="mt-12 text-center">
            
            <div className="text-center">
              <button className="group relative px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105" onClick={handleToggle}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg opacity-75"></div>
                <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                  {showAll ? "Show Less" : "Show More Jobs"}
                  {showAll ? <ChevronUp className="w-4 h-4 text-cyan-400 animate-bounce" />:<ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobCategoriesSection;
