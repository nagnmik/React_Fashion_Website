import React from 'react';
import Hero from '../components/Hero';
import Image from '../assets/1.jpg';
import Address from '../components/Address';

function Store() {
  return (
    <>
        <Hero 
            cName="hero" 
            heroImg={Image} 
        />
        <Address/>
    </>
  )
}

export default Store;
