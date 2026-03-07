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
          </div>

          {/* --- SOCIAL / CONTACT ICONS --- */}
          <div className="flex gap-3">
            <a
              href={displayEmail ? `mailto:${displayEmail}` : '#'}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 group"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/justinfei9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 group"
              aria-label="GitHub Profile"
            >
              <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/justin-feinman-34609726a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 group"
              aria-label="LinkedIn Profile"
            >
              <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;