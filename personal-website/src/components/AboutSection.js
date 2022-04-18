import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutSection.css';
import pic2 from '../images/guitar1.jpg';
import pic3 from '../images/guitar2.jpg';

function AboutSection() {
  return (
    <div id='about' className='about-container'>
      <h1>ABOUT</h1>
     <div className='row-container'>
      
        <img className='pic' alt='guitar-pic-1' src={pic2} /> 
        <img className='pic' alt='guitar-pic-2' src={pic3} /> 
        <div className='column-container'>
      
        <p className='p2-container'>I am an 18-year-old from Los Angeles, California, who loves music, programming, reading, traveling, and learning new things.
            My passions for music and programming have led to me to explore ways of combining the two studies, whether through
            learning a new programming language to do audio analysis on some of my favorite tracks, creating apps for beginner
            musicians, or trying my hand at using fimling and audio editing software to record, produce, and assemble covers of
            my favorite songs.
        </p>
        
        <p className='p2-container'>Through these efforts, my various community service jobs at my high school and Russian school, and my internships at Boeing
            and the San Diego Supercomputer Center, it is my goal to make an impact on both my local and global communities.
            On this website you'll get to know me, my passions and projects, and my vision for the future. 
        </p>
        <div className='about-btns'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            >
                Let's Connect!
                <i class='fab fa-linkedin' />
            </Button>
        </div>
        </div>
        
        </div>
    </div>
  );
}
export default AboutSection;