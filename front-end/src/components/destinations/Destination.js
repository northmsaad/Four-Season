/** @format */

import React from 'react';
import './destination.css';
import Astore from '../../assets/ghizer.jpg';
import Darel from '../../assets/Fairy.jpg';
import Ghizer from '../../assets/astore.jpg';
import Hunza from '../../assets/hunza.jpg';
import Gilgit from '../../assets/gilgit.jpg';
import Skardu from '../../assets/skardu.jpg';
function Destination() {
  return (
    <div name="destinations" className="destination">
      <div className="container">
        <h1>All Inclusive Places</h1>
        <p>On the Heaven on Earth GB</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Astore} alt="/" />
          <img src={Darel} alt="/" />
          <img src={Ghizer} alt="/" />
          <img src={Hunza} alt="/" />
          <img src={Gilgit} alt="/" />
          <img src={Skardu} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Destination;
