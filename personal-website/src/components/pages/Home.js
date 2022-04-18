import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutSection from '../AboutSection';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;