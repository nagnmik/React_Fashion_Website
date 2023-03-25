import React from 'react';
import "./Product.css";
import ProductData from './ProductData';
import Product1 from "../assets/4.jpg";
import Product2 from "../assets/5.jpg";
import Product3 from "../assets/6.jpg";
import Product4 from "../assets/7.jpg";
import Product5 from "../assets/8.jpg";
import Product6 from "../assets/9.jpg";
import Product7 from "../assets/10.jpg";
import Product8 from "../assets/11.jpg";
import Product9 from "../assets/12.jpg";
import Product10 from "../assets/13.jpg";
import Product11 from "../assets/14.jpg";
import Product12 from "../assets/15.jpg";
import Product13 from "../assets/16.jpg";
import Product14 from "../assets/17.jpg";
import Product15 from "../assets/18.jpg";
import Product16 from "../assets/19.jpg";
import Product17 from "../assets/20.jpg";
import Product18 from "../assets/21.jpg";

function Product() {
  return (
    <>
    <div className="product">
      <h4 className='sale-heading'>sản phẩm ưu đãi</h4>
      <div className="product-card">
        <ProductData
            image={Product1}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product2}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product3}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product4}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product5}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product6}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        
      </div>
      <h4 className='sale-heading'>NEW ARRIVALS</h4>
      <div className="trip-card">
        <ProductData
            image={Product7}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product8}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product9}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product10}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product11}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product12}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        
      </div>
      <h4 className='sale-heading'>BEST SELLERS</h4>
      <div className="trip-card">
        <ProductData
            image={Product13}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product14}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product15}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product16}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product17}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        <ProductData
            image={Product18}
            heading="QUẦN VẢI METUS – 2898"
            text="99.000VND"
        />
        
      </div>
    </div>
    </>
  )
}

export default Product;
