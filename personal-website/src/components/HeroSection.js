import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/vinyl.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <p>Hi, I'm</p>
      <h1>Dasha Shevchenko</h1>
    </div>
  );
}

export default HeroSection;