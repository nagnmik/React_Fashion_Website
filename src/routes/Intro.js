import React from 'react';
import AboutUs from '../components/AboutUs';
import Image from '../assets/45.jpg';
import Hero from '../components/Hero';

function Intro() {
  return (
    <>
        <Hero 
            cName="hero" 
            heroImg={Image} 
        />
        <AboutUs/>
    </>
  )
}

export default Intro;
