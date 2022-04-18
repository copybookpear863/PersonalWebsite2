import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import codeHSlogo from '../images/codeHSlogo.png';
import MTApp from '../images/MTApp.png';
import GitHub from '../images/github.png';
import MATLAB from '../images/MATLAB-logo.png';
import MMT from '../images/mammamiathumbnail.jpeg';
import HTFC from '../images/HTFOMOCover.png';
import HTWC from '../images/HTWomenCover.png';
import Boeing from '../images/Boeing.png';

function Cards() {
  return (
    <div id='portfolio' className='cards'>
      <h1>PORTFOLIO</h1>
      <p>Here are some of my recent projects:</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={codeHSlogo}
              text="My simple version of the Wordle game. I'm currently working on adding more features to it."
              label='Java'
              path='https://codehs.com/sandbox/id/wordle-hfsLMJ/run'
            />
            <CardItem
              src={MTApp}
              text="An app that helps people learn music theory by letting them practice placing notes on the treble clef staff. I'm currently working on adding more features to it."
              label='React Native'
              path='https://snack.expo.dev/@copybookpear863/music-theory-app-prototype'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={GitHub}
              text='This website! I coded it all myself and this link will take you to the github repository for it.'
              label='React, JavaScript, CSS'
              path='https://github.com/copybookpear863/PersonalWebsite'
            />
            <CardItem
              src={MATLAB}
              text='This is a MATLAB template for creating graphs based on experimental data that I used in school for physics class.'
              label='MATLAB'
              path='https://github.com/copybookpear863/MatlabGraphing/blob/main/GraphingTemplate.pdf'
            />
          </ul>
        </div>
      </div>
      <h1>PUBLICATIONS</h1>
      <p>Below are articles from the school newspaper and Boeing internship that feature my service and experience:</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={MMT}
              text="Thank you for the music — RUHS students played music live in the pit orchestra for the spring musical “Mamma Mia!”"
              label='RUHS High Tide'
              path='https://ruhsmedia.com/2022/04/thank-you-for-the-music/'
            />
             <CardItem
              src={HTFC}
              text="Helping From Home — RUHS students participate in bake sales and supply drives to support Ukranians during the war with Russia"
              label='RUHS High Tide'
              path='https://issuu.com/hightideonline/docs/issue_9/2'
            />
            <CardItem
              src={HTWC}
              text="Decoding the path to STEM — Female students and teachers at RUHS work on creating a space for girls to enter STEM and explore their interests"
              label='RUHS High Tide'
              path='https://issuu.com/mzielger1/docs/womenatruhs/8'
            />
            <CardItem
              src={Boeing}
              text="Boeing Summer Program 2021 Software Internship Review"
              label='Boeing 2021'
              path='https://github.com/copybookpear863/PersonalWebsite/blob/main/public/BoeingSummerProgramSoftwarePages.pdf'
            />
          </ul>
          </div>
        </div>
    </div>
  );
}

export default Cards;