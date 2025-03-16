import React from 'react';
import { Star, MapPin, Users, Clock } from 'lucide-react';

const SuccessStoriesSection = () => {
  const stories = [
    {
      type: "Business",
      name: "Sharma Electronics",
      location: "Jaipur, Rajasthan",
      image: "/api/placeholder/120/120",
      quote: "Found 5 reliable staff members within a week. The local candidates were perfect for our store.",
      stats: {
        hires: "5 Hires",
        time: "7 Days",
        retention: "100%"
      }
    },
    {
      type: "Candidate",
      name: "Rajesh Kumar",
      location: "Lucknow, UP",
      image: "/api/placeholder/120/120",
      quote: "Got a job at a local supermarket within 2 days of applying. Working close to home is a blessing.",
      stats: {
        distance: "3 KM",
        salary: "₹15K/month",
        joining: "48 hours"
      }
    },
    {
      type: "Influencer",
      name: "Priya Patel",
      location: "Vadodara, Gujarat",
      image: "/api/placeholder/120/120",
      quote: "Helped 50+ locals find jobs near their homes. Earning well while serving my community.",
      stats: {
        placements: "50+",
        earnings: "₹75K/month",
        area: "Local 10KM"
      }
    }
  ];

  return (
    <section className="py-24 md:py-32 relative font-sans" id='stories'>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text tracking-tight">
          Local Success Stories
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 text-center mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          Real stories from businesses, job seekers, and influencers in your city
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-xl border border-slate-800 hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-20 h-20 rounded-xl object-cover border-2 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-4 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors duration-300">
                        {story.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-white mb-1">{story.name}</h3>
                    <div className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      <MapPin className="w-4 h-4 mr-1 text-cyan-400" />
                      {story.location}
                    </div>
                  </div>
                </div>

                <blockquote className="text-slate-300 mb-8 italic relative">
                  <span className="absolute -left-2 -top-2 text-4xl text-cyan-400/20">"</span>
                  <span className="absolute -right-2 -bottom-2 text-4xl text-cyan-400/20">"</span>
                  <p className="relative z-10 leading-relaxed">{story.quote}</p>
                </blockquote>

                <div className="grid grid-cols-3 gap-4 text-center mt-auto">
                  {Object.entries(story.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="bg-slate-800/50 rounded-lg p-3 group-hover:bg-slate-800/70 transition-colors duration-300">
                      <div className="font-bold text-cyan-400 mb-1">{value}</div>
                      <div className="text-xs text-slate-400 capitalize font-medium">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 ease-out hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl"></div>
            <div className="absolute inset-0.5 bg-black rounded-xl"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
              View All Success Stories
              <Star className="w-5 h-5 text-cyan-400 transition-transform group-hover:rotate-12" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;