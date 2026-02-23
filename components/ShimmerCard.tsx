import React from "react";
import { motion } from "framer-motion";

interface ShimmerCardProps {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

const ShimmerCard: React.FC<ShimmerCardProps> = ({ title, desc, icon, color }) => {
  return (
    <div className="group relative w-full mt-10 h-full transition-all duration-300 hover:-translate-y-2 z-0 hover:z-50">
      
      {/* 1. SHIMMER BORDER CONTAINER */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 p-[2px] overflow-hidden z-10">
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          transition={{
            repeat: Infinity,
            duration: 3, // Slower duration makes the 3 points much easier to track visually
            ease: "linear",
          }}
          style={{
            background: `conic-gradient(
              from 0deg, 
              ${color} 0%, 
              transparent 8%, 
              transparent 33%, 
              ${color} 33%, 
              ${color} 41%, 
              transparent 41%, 
              transparent 66%, 
              ${color} 66%, 
              ${color} 74%, 
              transparent 74%, 
              transparent 100%
            )`,
          }}
          className="absolute inset-[-250%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-[2px] rounded-[calc(2.5rem-2px)] bg-white dark:bg-gray-950 z-0" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 h-full w-full p-10 pt-16 flex flex-col items-start text-left">
        
        {/* Floating Icon Container */}
        <div className="absolute -top-10 left-10">
          <div 
            className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 20px 40px -10px rgba(0,0,0,0.3)` 
            }}
          >
            <span className="material-symbols-outlined text-4xl text-white">
              {icon}
            </span>
          </div>
        </div>
        
        {/* Text Content */}
        <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ShimmerCard;