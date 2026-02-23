import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Hosting from '../components/Hosting';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Hosting />
    </>
  );
};

export default Home;