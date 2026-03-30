import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Code, Briefcase } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [displayEmail, setDisplayEmail] = useState('');

  // Obfuscate email to prevent easy scraping
  useEffect(() => {
    const ePt1 = 'justinfeinman89';
    const ePt2 = 'gmail.com';
    setDisplayEmail(`${ePt1}@${ePt2}`);
  }, []);

  return (
    <footer className="bg-primary py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* --- BRAND & COPYRIGHT --- */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-black text-2xl tracking-tighter text-white block mb-1">
              Fein<span className="text-blue-500">Websites</span>
            </Link>
            <p className="text-white/40 text-xs font-semibold tracking-wide">
              © {currentYear} Justin Feinman. All rights reserved.
            </p>
            <p className="text-white/30 text-xs font-medium tracking-wide mt-1">
              Serving Westchester County & Long Island, NY
            </p>
          </div>

          {/* --- SOCIAL / CONTACT ICONS --- */}
          <div className="flex gap-3">
            {/* Email */}
            <a
              href={displayEmail ? `mailto:${displayEmail}` : '#'}
              aria-label="Email Me"
              className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:border-transparent group"
            >
              {/* Tooltip */}
              <span className="
                pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2
                px-2 py-1 rounded text-xs font-semibold whitespace-nowrap
                bg-white text-gray-800 shadow-lg
                opacity-0 -translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                group-hover:bg-blue-600 group-hover:text-white
                transition-all duration-300
                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                after:border-4 after:border-transparent after:border-t-white
                group-hover:after:border-t-blue-600
              ">
                Email
              </span>
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/justinfei9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-200 hover:-translate-y-1 hover:bg-violet-600 hover:text-white hover:border-transparent group"
            >
              <span className="
                pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2
                px-2 py-1 rounded text-xs font-semibold whitespace-nowrap
                bg-white text-gray-800 shadow-lg
                opacity-0 -translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                group-hover:bg-violet-600 group-hover:text-white
                transition-all duration-300
                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                after:border-4 after:border-transparent after:border-t-white
                group-hover:after:border-t-violet-600
              ">
                GitHub
              </span>
              <Code className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/justin-feinman-34609726a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-200 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white hover:border-transparent group"
            >
              <span className="
                pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2
                px-2 py-1 rounded text-xs font-semibold whitespace-nowrap
                bg-white text-gray-800 shadow-lg
                opacity-0 -translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                group-hover:bg-[#0A66C2] group-hover:text-white
                transition-all duration-300
                after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                after:border-4 after:border-transparent after:border-t-white
                group-hover:after:border-t-[#0A66C2]
              ">
                LinkedIn
              </span>
              <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;