import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- TOP ROW: BRAND & LINKS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12"
        >
          {/* Brand Identity */}
          <div className="text-center md:text-left">
            <a href="#" className="font-black text-3xl tracking-tighter text-white block mb-2">
              Fein<span className="text-blue-500">Websites</span>
            </a>
            <p className="text-blue-100/60 font-medium text-sm max-w-xs mx-auto md:mx-0">
              High-performance, hand-coded websites for businesses that actually want to grow.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-2">
            {navLinks.map((link) => (
               <a 
                key={link.name} 
                href={link.href}
                className="text-white/70 hover:text-white font-bold transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* --- BOTTOM ROW: COPYRIGHT & SOCIALS --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6"
        >
          <p className="text-white/40 text-sm font-semibold text-center md:text-left">
            © {currentYear} Justin Fein. All rights reserved.
          </p>
          
          {/* Social / Contact Icons */}
          <div className="flex gap-4">
            <a 
              href="mailto:your-email@example.com" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 group"
              aria-label="Email Me"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">mail</span>
            </a>
            <a 
              href="https://github.com/justinfei9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 group"
              aria-label="GitHub Profile"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">code</span>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 group"
              aria-label="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">work</span>
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;