import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { RefreshCw, Code, Smartphone, Search, User, Cloud } from "lucide-react";

// --- SHIMMER CARD COMPONENT ---
interface ShimmerCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({ title, desc, icon, color }) => {
  return (
    <div className="group relative w-full mt-10 h-full transition-all duration-300 hover:-translate-y-2 z-0 hover:z-50">
      <div className="absolute inset-0 rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 p-[2px] overflow-hidden z-10">
        <motion.div
          animate={{ rotate: "360deg" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{
            background: `conic-gradient(from 0deg, transparent 20%, ${color} 40%, transparent 50%, transparent 70%, ${color} 90%, transparent 100%)`,
          }}
          className="absolute inset-[-250%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-[2px] rounded-[calc(2.5rem-2px)] bg-white dark:bg-gray-950 z-0" />
      </div>

      <div className="relative z-20 h-full w-full p-10 pt-16 flex flex-col items-start text-left">
        <div className="absolute -top-10 left-10">
          <div
            className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110"
            style={{ backgroundColor: color, boxShadow: `0 20px 40px -10px rgba(0,0,0,0.3)` }}
          >
            <div className="text-white flex items-center justify-center w-10 h-10">{icon}</div>
          </div>
        </div>
        <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  );
};

// --- ANIMATED UNDERLINE COMPONENT ---
const AnimatedUnderlineText = ({ text, isInView }: { text: string; isInView: boolean }) => {
  const syncDuration = 3.5;
  const syncEase = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative inline-block w-fit">
      {/* The Headline with Reveal Animation */}
      <motion.h2
        className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-gray-900 dark:text-white"
        initial={{
          opacity: 0,
          clipPath: "inset(0% 100% 0% 0%)" // Fully clipped from the right
        }}
        animate={isInView ? {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)" // Revealed to the left
        } : {}}
        transition={{
          duration: syncDuration,
          ease: syncEase,
          delay: 0.2
        }}
      >
        {text}
      </motion.h2>

      {/* The Underline - Deep Curve Version */}
      <div className="absolute -bottom-4 md:-bottom-7 left-0 w-full overflow-visible">
        <motion.svg
          width="100%"
          height="30"
          viewBox="0 0 300 30"
          fill="none"
          preserveAspectRatio="none"
          className="text-gray-900 dark:text-white"
        >
          <motion.path
            d="M 0,15 Q 75,-5 150,15 Q 225,35 300,15"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? {
              pathLength: 1,
              opacity: 1
            } : {}}
            transition={{
              duration: syncDuration,
              ease: syncEase,
              delay: 0.2
            }}
            whileHover={{
              d: "M 0,15 Q 75,35 150,15 Q 225,-5 300,15",
              transition: { duration: 0.8 },
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

// --- MAIN SERVICES SECTION ---
const Services: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    { icon: <RefreshCw className="w-10 h-10" />, title: "Unlimited Revisions", desc: "I don't stop until you're 100% happy with the design. No extra fees, no stress.", color: "#3b82f6" },
    { icon: <Code className="w-10 h-10" />, title: "Custom Hand-Coded", desc: "No templates or slow Website Builders. I write every line of code to ensure your site is fast and secure.", color: "#8b5cf6" },
    { icon: <Smartphone className="w-10 h-10" />, title: "Mobile Friendly", desc: "Your site will look perfect on every device, from iPhones to desktop monitors.", color: "#f43f5e" },
    { icon: <Search className="w-10 h-10" />, title: "SEO Ready", desc: "Built with Google's best practices to help your business get found by local customers.", color: "#10b981" },
    { icon: <User className="w-10 h-10" />, title: "Personal Partner", desc: "I'm a solo developer. You work directly with me—not a faceless agency or a support ticket.", color: "#f59e0b" },
    { icon: <Cloud className="w-10 h-10" />, title: "Hosting & Maintenance", desc: "I handle the 24/7 uptime and technical updates so you can focus on running your business.", color: "#06b6d4" }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gray-200 dark:bg-gray-950 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="flex flex-col items-center justify-center text-center mb-24">
          <AnimatedUnderlineText text="Websites That Perform" isInView={isInView} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-12 text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl"
          >
            High-performance, hand-coded solutions designed to turn visitors into customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: i * 0.1 }}
            >
              <ShimmerCard {...f} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;