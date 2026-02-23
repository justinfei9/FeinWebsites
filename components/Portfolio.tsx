import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  { id: 1, title: "Here Comes The Creations", img: "./content/herecomesthecreations.png", tag: "Client Portfolio", url: "https://herecomesthecreations.com" },
  { id: 2, title: "Portfolio Resume", img: "./content/portfolioWebsite.png", tag: "Personal Resume", url: "https://justinfei9.github.io/IT-Website/" },
  { id: 3, title: "Barber Shop Website", img: "./content/barbershop.png", tag: "Design Concept", url: "https://justinfei9.github.io/barbershop-example/" },
  { id: 4, title: "Rent Tracking App", img: "./content/rentapp.png", tag: "Software UI", url: "https://justinfei9.github.io/rent-tracking-app/" },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      // Changed bg to match your Services section flow
      className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* --- BACKGROUND CURVE DIVIDER --- */}
      {/* This SVG creates the "scoop" or curve from the section above */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-[0] z-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[100px] fill-gray-200 dark:fill-gray-900"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee 25s linear infinite;
        }
        .portfolio-card:hover ~ .marquee-track,
        .marquee-track:has(.portfolio-card:hover) {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mb-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white">
             Featured Work
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl">
            A mix of client launches and design explorations. Click to visit.
          </p>
        </div>
      </div>

      {/* --- MARQUEE SECTION --- */}
      <div className="relative z-10 flex w-full mt-12">
        <div className="marquee-track flex gap-8">
          {duplicatedProjects.map((project, index) => (
            <a 
              key={index} 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card relative w-[300px] md:w-[450px] flex-shrink-0 group cursor-pointer block"
            >
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 group-hover:shadow-2xl">
                <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="w-full h-125 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-top object-cover" 
                      loading="eager"
                    />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-1 px-1 text-left">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  {project.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;