import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { FloatingDock } from './FloatingDock';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Packages", href: "/pricing" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] flex justify-center pointer-events-none">
      <div className="w-full relative flex justify-center mt-6">
        <motion.nav
          layout
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 24,
            mass: 1
          }}
          className={cn(
            "flex items-center justify-between px-6 md:px-10 pointer-events-auto absolute",
            "bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl",
            isScrolled
              ? 'w-full mt-[-24px] rounded-none py-2 border-x-0'
              : 'w-[92%] max-w-5xl rounded-[2.5rem] py-3'
          )}
        >
          {/* Logo */}
          <motion.div layout="position" className="flex items-center z-50">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-black text-2xl tracking-tighter text-gray-900 dark:text-white">
              Fein<span className="text-blue-600">Websites</span>
            </Link>
          </motion.div>

          {/* Text-Based Floating Dock */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <FloatingDock items={navItems} />
          </div>

          <div className="flex items-center gap-4 z-50">
            {/* CTA Button - Hidden on mobile */}
            <motion.div layout="position" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="p-0"
              >
                <Link
                  to="/contact"
                  className="bg-primary text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-slate-700 block shadow-lg shadow-blue-500/30 border border-blue-400/20"
                >
                  Start Project
                </Link>
              </motion.button>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button
              layout="position"
              className="md:hidden p-2 text-gray-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="absolute top-16 left-[4%] w-[92%] bg-white dark:bg-black border border-white/10 shadow-2xl rounded-3xl p-6 pointer-events-auto flex flex-col gap-4 mt-2 md:hidden backdrop-blur-3xl z-40"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-3 border-b border-gray-100 dark:border-white/5 last:border-0"
                  >
                    {item.title}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 bg-primary text-white text-center font-bold text-lg px-7 py-3.5 rounded-2xl block shadow-lg shadow-blue-500/30 border border-blue-400/20"
                >
                  Start Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

export default Navbar;