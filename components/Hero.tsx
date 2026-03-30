import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroBackground from './HeroBackground';
import TextType from './TextType';

const Hero: React.FC = () => {
  const businessTypes = [
    { label: "Small Businesses", color: "#93c5fd" },
    { label: "Local Restaurants", color: "#e75656" },
    { label: "Contractors", color: "#c47556" },
    { label: "Mechanics", color: "#4efdbd" },
    { label: "Painters", color: "#f7d653" },
    { label: "Construction Companies", color: "#fb923c" },
    { label: "Landscapers", color: "#05cb4e" }
  ];

  const labels = businessTypes.map(b => b.label);
  const colors = businessTypes.map(b => b.color);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative bg-primary pt-32 pb-36 overflow-hidden min-h-[85vh] flex items-center">
      <HeroBackground />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Professional Websites for <br />
          <div className="h-[1.2em] mt-2 block">
            <TextType
              text={labels}
              textColors={colors}
              className="font-extrabold"
              variableSpeed={{ min: 40, max: 120 }}
              deletingSpeed={30}
              pauseDuration={2500}
              cursorClassName="text-white"
            />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-lg mx-auto text-lg text-blue-100 mb-10"
        >
          SEO-ready, mobile-first websites for businesses across{' '}
          <strong className="text-white font-semibold">Westchester & Long Island</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-5 items-center"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl shadow-blue-500/40 border border-blue-400/20 transition-colors hover:bg-blue-700 block text-lg"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.button
            onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full transition-all block text-lg cursor-pointer"
          >
            View Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;