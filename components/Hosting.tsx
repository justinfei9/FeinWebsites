import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Hosting: React.FC = () => {
  return (
    <section className="relative pt-32 pb-44 bg-[#dfc0ff] dark:bg-[#2e1065] overflow-hidden transition-colors duration-500">

      {/* --- TOP CURVE (WAVY HUMPS - NO FLATLINE) --- */}
      <div className="absolute -top-1 left-0 w-full leading-[0] z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+4px)] -ml-[2px] h-[100px] fill-blue-50 dark:fill-slate-950"
        >
          {/* Continuous double-wave path */}
          <path d="M0,0 L0,40 C300,120 400,120 600,60 C800,0 900,0 1200,40 L1200,0 Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        {/* Main Card: Frosty Glassmorphism */}
        <div className="bg-white/30 dark:bg-black/20 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-16 shadow-2xl border border-white/50 flex flex-col lg:flex-row items-center gap-12 text-left">

          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-slate-950 dark:text-purple-100 mb-6 tracking-tighter uppercase italic">
              Worry-Free <br />
              <span className="text-purple-950 dark:text-purple-400">Maintenance</span>
            </h2>
            <p className="text-slate-950 dark:text-purple-200/80 mb-8 text-lg leading-relaxed font-medium">
              Don't stress about technical updates, backups, or downtime. I offer comprehensive monthly packages so you can focus on running your business while I keep your site perfect.
            </p>

            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/20 border border-white/10 transition-all text-lg"
              >
                Start Project
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Features List */}
          <div className="lg:w-1/2 bg-white/50 dark:bg-black/40 p-8 md:p-10 rounded-3xl w-full border border-white/30 shadow-xl">
            <ul className="space-y-6">
              {[
                "Daily Backups",
                "99.9% Uptime Guarantee",
                "SSL Security Certificate",
                "Continuous Performance Tweaks",
                "Priority Email Support"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-950 dark:text-purple-50 font-bold text-lg">
                  <CheckCircle2 className="text-teal-600 dark:text-teal-400 mr-4 w-6 h-6" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- BOTTOM CURVE (WAVY HUMPS - NO FLATLINE) --- */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+4px)] -ml-[2px] h-[120px] md:h-[150px] fill-primary transition-transform duration-300"
        >
          {/* Physical flip: Y values inverted (120 - original_y) */}
          <path d="M0,120 L0,80 C300,0 400,0 600,60 C800,120 900,120 1200,80 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hosting;