import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Palette, Zap, BadgeCheck, Headset } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      title: "Bulletproof Security",
      desc: "I build using modern frameworks that don't rely on vulnerable databases. Your site stays online and stays safe from common hacks.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Direct Design Process",
      desc: "You work directly with me to create a look that fits your brand. Since I handle both the design and the code, nothing gets lost in translation.",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Lightning Fast Performance",
      desc: "I strip away the bloat found in typical website builders. Your pages load instantly so your customers don't get tired of waiting.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Money Back Guarantee",
      desc: "If I can’t design a concept you love, you get your money back. I value my reputation more than a deposit.",
      icon: <BadgeCheck className="w-8 h-8" />,
    },
    {
      title: "Direct Access Support",
      desc: "No robots and no support tickets. When you have a question you reach me directly on my personal line.",
      icon: <Headset className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-blue-50 dark:bg-slate-950 overflow-hidden"
    >
      {/* --- TOP CURVE DIVIDER (ASYMMETRICAL / ORGANIC WAVE) --- */}
      <div className="absolute -top-1 left-0 w-full leading-[0] z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+4px)] -ml-[2px] h-[100px] fill-white dark:fill-gray-950"
        >
          {/* Custom calculated path for smooth but irregular waves */}
          <path d="M0,0 L0,60 C 150,140 250,-20 450,40 C 600,85 700,150 850,80 C 1000,10 1100,130 1200,50 L1200,0 Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* --- LEFT SIDE: PORTRAIT WITH LONGER SHIMMER BORDER --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative group"
          >
            {/* 1. SHIMMER BORDER CONTAINER */}
            <div className="absolute inset-0 rounded-[3.5rem] bg-slate-200 dark:bg-slate-800 p-[3px] overflow-hidden z-0 shadow-2xl">
              <motion.div
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                }}
                style={{
                  background: `conic-gradient(
                    from 0deg, 
                    #3b82f6 0%,    
                    #3b82f6 25%,   
                    transparent 25%, 
                    transparent 50%, 
                    #3b82f6 50%,    
                    #3b82f6 75%,    
                    transparent 75%, 
                    transparent 100%
                  )`,
                }}
                className="absolute inset-[-250%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-[3px] rounded-[calc(3.5rem-3px)] bg-white dark:bg-slate-900 z-0" />
            </div>

            {/* 2. IMAGE CONTENT */}
            <div className="relative z-10 rounded-[calc(3.5rem-3px)] overflow-hidden aspect-[4/5] m-[3px]">
              <img
                src="./content/FounderPic.webp"
                alt="Justin Fein"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent opacity-80" />

              <div className="absolute bottom-8 left-8 transition-transform duration-500 group-hover:-translate-y-2 text-white">
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-none drop-shadow-lg">Justin Fein</h3>
                <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mt-2 drop-shadow-md">Owner and Solo Developer</p>
              </div>
            </div>

            {/* Glow effect behind the shimmer */}
            <div className="absolute -inset-10 bg-blue-400/20 blur-[100px] rounded-full -z-10 transition-all duration-700 group-hover:bg-blue-400/30 group-hover:scale-105" />
          </motion.div>

          {/* --- RIGHT SIDE: BUSINESS FEATURES --- */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  {/* --- ICON CONTAINER --- */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-blue-100 dark:border-slate-800 flex items-center justify-center cursor-pointer text-blue-600 transition-all duration-300 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/40"
                  >
                    {f.icon}
                  </motion.div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {f.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- CTA BUTTON --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-14"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-block bg-primary text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-blue-500/30 border border-blue-400/20 transition-colors hover:bg-slate-500"
              >
                Start Your Project
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;