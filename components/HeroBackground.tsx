import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30 z-0 pointer-events-none"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

      {/* Bottom Curve */}
      <div className="curve-bottom z-20 pointer-events-none">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-gray-200 dark:fill-slate-950" 
d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">

          </path>
        </svg>
      </div>
    </>
  );
};

export default HeroBackground;