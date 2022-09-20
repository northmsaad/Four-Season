/** @format */

import React from 'react';
import './selectimg.css';
import Astore from '../../assets/ghizer.jpg';

function Selectimg() {
  return (
    <div className="selects-location">
      <img src={Astore} alt="/" />
      <div className="overlay">
        <p>Astore</p>
      </div>
    </div>
  );
}

export default Selectimg;
