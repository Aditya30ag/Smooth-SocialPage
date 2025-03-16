import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
} from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";

const QuickApplyProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Share Your Details",
      description: "Just enter your details - no lengthy forms needed",
      color: "from-cyan-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Select Location",
      description: "Choose your work location around your city",
      color: "from-violet-400 to-violet-500",
    },
    {
      icon: Phone,
      title: "Interview with employer",
      description: "Interview with employer with language you know",
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: Calendar,
      title: "Start Working",
      description: "Begin your new job within 24-48 hours *",
      color: "from-amber-400 to-amber-500",
    },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.6 
      }
    }
  };

  return (
    <section className="py-10 md:py-14 relative min-h-full" id="how-it-works">
      <ParticleCanvas />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black z-0"
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text"
        >
          Your Followers Deserve Opportunities. Here's How It Works
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg md:text-2xl font-bold text-gray-400 mt-10 max-w-2xl mx-auto mb-12"
        >
          No complex forms. No long waiting. Start getting matched within 48 hours.*
        </motion.p>

        {/* Steps Section - Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              {/* Gradient Background Hover Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-slate-800 transition-all duration-300 h-[220px] sm:h-[260px] flex flex-col justify-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto`}
                >
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </motion.div>

                {/* Step Title */}
                <h3 className="text-sm sm:text-base font-bold text-center mb-2 sm:mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
          <div className="relative bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-slate-800">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.8,
                    duration: 0.8
                  }}
                  className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2"
                >
                  3,500+
                </motion.div>
                <div className="text-xs sm:text-sm text-slate-400">Jobs Filled This Month</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.9,
                    duration: 0.8
                  }}
                  className="text-2xl sm:text-3xl font-bold text-violet-400 mb-1 sm:mb-2"
                >
                  85%
                </motion.div>
                <div className="text-xs sm:text-sm text-slate-400">Start Within 24h</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 1.0,
                    duration: 0.8
                  }}
                  className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1 sm:mb-2"
                >
                  95%
                </motion.div>
                <div className="text-xs sm:text-sm text-slate-400">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickApplyProcess;