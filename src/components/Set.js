import React from 'react';
import './Set.css';
import set1 from '../assets/28.jpg';
import set2 from '../assets/32.jpg';
import set3 from '../assets/33.jpg';
import set4 from '../assets/34.jpg';
import set5 from '../assets/35.jpg';
import set6 from '../assets/37.jpg';

function Set() {
  return (
    <>
        <div className="set">
            <h4 className='set-heading'>set đồ gợi ý</h4>
            <div className="set-img">
                <img src={set1} alt="img"/>
                <img src={set2} alt="img"/>
                <img src={set3} alt="img"/>
                <img src={set4} alt="img"/>
                <img src={set5} alt="img"/>
                <img src={set6} alt="img"/>
            </div>
        </div>
    </>
  )
}

export default Set;
