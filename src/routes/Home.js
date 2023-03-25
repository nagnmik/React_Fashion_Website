import React from 'react';
import Hero from '../components/Hero';
import Image from "../assets/3.jpg";
import Product from '../components/Product';
import Set from '../components/Set';
import AboutUs from '../components/AboutUs';
import Voucher from '../components/Voucher';

function Home() {
  return (
    <>
        <Hero
                cName="hero"
                heroImg={Image}
                text="“Tận hưởng niềm vui của việc diện đồ chính là một nghệ thuật đích thực.”"
                buttonText="SHOPPING NOW"
                url="/"
                btnClass="show"
        />
        <Voucher/>
        <Product/>
        <Set/>
        <AboutUs/>
    </>
  )
}

export default Home;
