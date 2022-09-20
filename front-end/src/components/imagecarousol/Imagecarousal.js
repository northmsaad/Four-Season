/** @format */

import React from 'react';
import './imagecarousal.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import Astore from '../../assets/ghizer.jpg';
import Darel from '../../assets/Fairy.jpg';
import Ghizer from '../../assets/astore.jpg';
import Hunza from '../../assets/hunza.jpg';
import Gilgit from '../../assets/gilgit.jpg';
import Skardu from '../../assets/skardu.jpg';
function Imagecarousal() {
  return (
    <div name="curousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={Astore} alt="/" />
        </div>
        <div>
          <img src={Ghizer} alt="/" />
        </div>
        <div>
          <img src={Darel} alt="1" />
        </div>
        <div>
          <img src={Hunza} alt="1" />
        </div>
        <div>
          <img src={Gilgit} alt="1" />
        </div>
        <div>
          <img src={Skardu} alt="1" />
        </div>
      </Carousel>
    </div>
  );
}

export default Imagecarousal;
