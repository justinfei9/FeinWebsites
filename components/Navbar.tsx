import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FloatingDock } from './FloatingDock';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED: Added Packages (Pricing) to the array
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Packages", href: "/pricing" }, // This points to your new page
    { title: "Services", href: "/#services" },
    { title: "Portfolio", href: "/#portfolio" },
    { title: "About", href: "/#about" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] flex justify-center pointer-events-none">
      <motion.nav
        layout
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 24,
          mass: 1
        }}
        className={cn(
          "flex items-center justify-between px-6 md:px-10 pointer-events-auto",
          "bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl",
          isScrolled
            ? 'w-full mt-0 rounded-none py-2 border-x-0'
            : 'w-[92%] max-w-5xl mt-6 rounded-[2.5rem] py-3'
        )}
      >
        {/* Logo - Changed to Link */}
        <motion.div layout="position" className="flex items-center">
          <Link to="/" className="font-black text-2xl tracking-tighter text-gray-900 dark:text-white">
            Fein<span className="text-blue-600">Websites</span>
          </Link>
        </motion.div>

        {/* Text-Based Floating Dock */}
        <div className="hidden md:flex items-center">
          <FloatingDock items={navItems} />
        </div>

        {/* CTA Button - Changed to Link */}
        <motion.div layout="position">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-0" // Reset button padding for the Link inside
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
        <motion.button layout="position" className="md:hidden p-2 text-gray-900 dark:text-white">
          <Menu className="w-6 h-6" />
        </motion.button>
      </motion.nav>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

export default Navbar;