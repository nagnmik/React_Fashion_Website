import React from 'react';


function ProductData(props) {
  return (
    <>
     <div className="p-card">
        <div className="p-image">
            <img src={props.image} alt="img"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
     </div>
    </>
  )
}

export default ProductData;
