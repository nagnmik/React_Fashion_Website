import React from 'react'
import Hero from '../components/Hero'
import Image from '../assets/46.jpg'
import Product from '../components/Product';

function AllProduct() {
  return (
    <>
        <Hero cName="hero" heroImg={Image}/>
        <Product/>

    </>
  )
}

export default AllProduct;
