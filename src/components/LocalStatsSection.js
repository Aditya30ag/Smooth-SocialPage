import React, { useState } from "react";
import { MapPin, Clock, Languages, Building2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const LocalStatsSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const localStats = [
    {
      title: "Average Job Distance",
      value: "< 5 KM",
      description: "Work near your home",
      icon: MapPin,
    },
    {
      title: "Fast Hiring Process",
      value: "24-48 Hours",
      description: "Quick job starts",
      icon: Clock,
    },
    {
      title: "Languages Supported",
      value: "10+",
      description: "Apply in your language",
      icon: Languages,
    },
    {
      title: "Active Opportunities",
      value: "5000+",
      description: "Trusted partners",
      icon: Building2,
    },
  ];

  const languageContent = {
    english: {
      name: "English",
      title: "Language Is No Barrier to Success",
      description:
        "With support available in 10+ regional languages, we make it easy for you to guide your followers and help them secure opportunities, regardless of language preferences.",
    },
    hindi: {
      name: "हिंदी",
      title: "भाषा सफलता में बाधा नहीं है",
      description:
        "10+ क्षेत्रीय भाषाओं में उपलब्ध समर्थन के साथ, हम आपके फॉलोअर्स को मार्गदर्शन करने और भाषा प्राथमिकताओं की परवाह किए बिना अवसरों को सुरक्षित करने में मदद करना आसान बनाते हैं।",
    },
    tamil: {
      name: "தமிழ்",
      title: "வெற்றிக்கு மொழி தடையல்ல",
      description:
        "10+ பிராந்திய மொழிகளில் ஆதரவு கிடைக்கும் நிலையில், உங்கள் பின்தொடர்பவர்களுக்கு வழிகாட்டவும், மொழி விருப்பங்களைப் பொருட்படுத்தாமல் வாய்ப்புகளைப் பெறவும் உதவுகிறோம்.",
    },
    telugu: {
      name: "తెలుగు",
      title: "భాష విజయానికి అడ్డంకి కాదు",
      description:
        "10+ ప్రాంతీయ భాషలలో మద్దతు అందుబాటులో ఉంది, మీ అనుచరులకు మార్గనిర్దేశం చేయడానికి మరియు భాష ప్రాధాన్యతలతో సంబంధం లేకుండా అవకాశాలను పొందడంలో సహాయపడటం సులభతరం చేస్తుంది.",
    },
    bengali: {
      name: "বাংলা",
      title: "ভাষা সাফল্যের অন্তরায় নয়",
      description:
        "১০+ আঞ্চলিক ভাষায় সহায়তা উপলব্ধ থাকায়, আমরা আপনার অনুসারীদের নির্দেশনা দিতে এবং ভাষার পছন্দ নির্বিশেষে সুযোগগুলি সুরক্ষিত করতে সহজ করে তুলেছি।",
    },
    marathi: {
      name: "मराठी",
      title: "यशासाठी भाषा अडथळा नाही",
      description:
        "१०+ प्रादेशिक भाषांमध्ये समर्थन उपलब्ध असल्याने, आम्ही आपल्या अनुयायांना मार्गदर्शन करणे आणि भाषा पसंतीच्या पर्वा न करता संधी सुरक्षित करण्यात मदत करतो.",
    },
    gujarati: {
      name: "ગુજરાતી",
      title: "ભાષા સફળતામાં અવરોધ નથી",
      description:
        "૧૦+ પ્રાદેશિક ભાષાઓમાં સપોર્ટ ઉપલબ્ધ હોવાને કારણે, અમે તમારા અનુયાયીઓને માર્ગદર્શન આપવાનું અને ભાષા પસંદગીઓની પરવા કર્યા વિના તક પ્રદાન કરવાનું સરળ બનાવ્યું છે.",
    },
    kannada: {
      name: "ಕನ್ನಡ",
      title: "ಭಾಷೆ ಯಶಸ್ಸಿಗೆ ಅಡ್ಡಿಯಾಗದು",
      description:
        "10+ ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳ ಬೆಂಬಲ ಲಭ್ಯವಿರುವುದರಿಂದ, ನಿಮ್ಮ ಅನುಯಾಯಿಗಳನ್ನು ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ಮತ್ತು ಭಾಷಾ ಪ್ರಾಧಾನ್ಯತೆಗಳಿಗಿಂತಲೂ ಅನುಕೂಲಕರವಾಗಿ ಅವಕಾಶಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಲು ನಾವು ಸುಲಭ ಮಾಡಿದ್ದೇವೆ.",
    },
    malayalam: {
      name: "മലയാളം",
      title: "ഭാഷ വിജയം തടസ്സപ്പെടുത്തുന്നില്ല",
      description:
        "10+ പ്രാദേശിക ഭാഷകളിൽ പിന്തുണ ലഭ്യമാകുന്നതിനാൽ, നിങ്ങളുടെ അനുയായികൾക്ക് മാർഗനിർദേശം നൽകാനും ഭാഷാ മുൻഗണനകളെ പരിഗണിക്കാതെ അവസരങ്ങൾ ഉറപ്പാക്കാനുമുള്ള വഴി ഞങ്ങൾ എളുപ്പമാക്കിയിരിക്കുന്നു.",
    },
    punjabi: {
      name: "ਪੰਜਾਬੀ",
      title: "ਭਾਸ਼ਾ ਕਾਮਯਾਬੀ ਵਿੱਚ ਰੁਕਾਵਟ ਨਹੀਂ",
      description:
        "10+ ਖੇਤਰੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਹਾਇਤਾ ਉਪਲਬਧ ਹੋਣ ਕਾਰਨ, ਅਸੀਂ ਤੁਹਾਡੇ ਅਨੁਯਾਇਆਂ ਲਈ ਮਾਰਗਦਰਸ਼ਨ ਦੇਣਾ ਅਤੇ ਭਾਸ਼ਾ ਦੀ ਪਸੰਦ ਬਿਨਾ ਮੌਕੇ ਪ੍ਰਾਪਤ ਕਰਨਾ ਆਸਾਨ ਬਣਾਇਆ ਹੈ।",
    },
    urdu: {
      name: "اردو",
      title: "زبان کامیابی میں رکاوٹ نہیں ہے",
      description:
        "10+ علاقائی زبانوں میں معاونت دستیاب ہونے کے ساتھ، ہم آپ کے پیروکاروں کی رہنمائی کرنا اور زبان کی ترجیحات سے قطع نظر مواقع کو محفوظ بنانا آسان بناتے ہیں۔",
    },
  };

  // Function to handle language selection
  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language);
  };

  // Object to map language names to their keys
  const languageMap = {
    English: "english",
    हिंदी: "hindi",
    தமிழ்: "tamil",
    తెలుగు: "telugu",
    বাংলা: "bengali",
    मराठी: "marathi",
    ગુજરાતી: "gujarati",
    ಕನ್ನಡ: "kannada",
    മലയാളം: "malayalam",
    ਪੰਜਾਬੀ: "punjabi",
    اردو: "urdu",
  };
  const handleAutoSelectLanguage = () => {
    const languageKeys = Object.keys(languageMap);
    const currentIndex = languageKeys.findIndex(
      (key) => languageMap[key] === currentLanguage
    );
    const nextIndex = (currentIndex + 1) % languageKeys.length;
    setCurrentLanguage(languageMap[languageKeys[nextIndex]]);
  };
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-16 lg:px-24 relative"
      id="about-us"
    >
      {/* Background Gradient Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 blur-3xl"
      ></motion.div>
  
      <div className="max-w-6xl mx-auto relative px-4 md:px-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text"
        >
          Jobs That Are Close to Home
        </motion.h2>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text"
        >
          Made for Your Network
        </motion.h2>
  
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {localStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative h-full text-center"
            >
              {/* Consistent hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-black/80 rounded-xl p-6 sm:p-8 md:p-10 border border-slate-800 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group-hover:shadow-lg group-hover:shadow-cyan-500">
                <div className="flex justify-center items-center flex-col">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="w-10 h-10 text-cyan-400 mb-3" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
                    {stat.value}
                  </h3>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    {stat.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-lg md:text-2xl font-bold text-gray-400 mt-10 max-w-2xl mx-auto"
        >
          We focus on jobs that matter, such as healthcare workers, teachers,
          drivers, helpers, retail workers, and more ensuring your community thrives!*
        </motion.p>
  
        {/* Language Support Banner */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 relative px-4 md:px-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg blur opacity-25"></div>
          <div className="relative bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-slate-800 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text"
                >
                  {languageContent[currentLanguage].title}
                </motion.h3>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-slate-300 mb-4 md:mb-6"
                >
                  {languageContent[currentLanguage].description}
                </motion.p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    "English",
                    "हिंदी",
                    "தமிழ்",
                    "తెలుగు",
                    "বাংলা",
                    "मराठी",
                    "ગુજરાતી",
                    "ಕನ್ನಡ",
                    "മലയാളം",
                    "ਪੰਜਾਬੀ",
                    "اردو",
                  ].map((lang, index) => (
                    <motion.button
                      key={lang}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLanguageSelect(languageMap[lang])}
                      className={`px-3 py-1 rounded-full text-xs md:text-sm transition-all duration-300 ${
                        currentLanguage === languageMap[lang]
                          ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-bold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {lang}
                    </motion.button>
                  ))}
                </div>
              </div>
  
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAutoSelectLanguage}
                    className="relative px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-bold transition-all duration-300 ease-out transform"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-lg"></div>
                    <div className="absolute inset-0.5 bg-black rounded-lg"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text">
                      Multilingual Support
                      <motion.div
                        animate={{ rotate: [0, 15, 0, -15, 0] }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                      >
                        <Languages className="w-5 h-5 text-cyan-400" />
                      </motion.div>
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalStatsSection;
