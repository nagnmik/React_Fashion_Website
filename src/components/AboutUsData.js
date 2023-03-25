import React from 'react';

function AboutUsData(props) {
  return (
    <div className="content-fashion">
                <div className="fashion-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>

                <div className="image">
                    <img alt="img" src={props.img1}/>
                    <img alt="img" src={props.img2}/>
                </div>
            </div>
  )
}

export default AboutUsData;
