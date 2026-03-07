import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  { id: 1, title: "Here Comes The Creations", img: "./content/herecomesthecreations.webp", tag: "Client Portfolio", url: "https://herecomesthecreations.com" },
  { id: 2, title: "Portfolio Resume", img: "./content/portfolioWebsite.webp", tag: "Personal Resume", url: "https://justinfei9.github.io/IT-Website/" },
  { id: 3, title: "Barber Shop Website", img: "./content/barbershop.webp", tag: "Design Concept", url: "https://justinfei9.github.io/barbershop-example/" },
  { id: 4, title: "Rent Tracking App", img: "./content/rentapp.webp", tag: "Software UI", url: "https://justinfei9.github.io/rent-tracking-app/" },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Curve Divider */}
      <div className="absolute -top-1 left-0 w-full leading-[0] z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+4px)] -ml-[2px] h-[100px] fill-gray-200 dark:fill-gray-900"
        >
          <path d="M0,0V30c0,0,150,90,300,90s300-60,450-60,300,60,450,60V0H0Z"></path>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
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

      <motion.div style={{ y }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white">
              Featured Work
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl">
              A mix of client launches and design explorations. Click to visit.
            </p>
          </div>
        </div>

        <div className="relative flex w-full mt-12">
          <div className="marquee-track flex gap-8">
            {duplicatedProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card relative w-[300px] md:w-[450px] flex-shrink-0 group cursor-pointer block"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 mb-5 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Text Content Underneath */}
                <div className="flex flex-col gap-1.5 px-2 text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
                    {project.tag}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-2xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {/* Arrow indicator */}
                    <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xl">
                      &rarr;
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;