/** @format */

import React from 'react';
import './select.css';
import Astore from '../../assets/ghizer.jpg';
import Darel from '../../assets/Fairy.jpg';
import Ghizer from '../../assets/astore.jpg';
import Hunza from '../../assets/hunza.jpg';
import Gilgit from '../../assets/gilgit.jpg';
import Skardu from '../../assets/skardu.jpg';
import Selectimg from '../selectimg/Selectimg';
function Select() {
  return (
    <div name="Views" className="selects">
      <div className="container">
        <Selectimg bgImg={Ghizer} text="Astore" />
        <Selectimg bgImg={Darel} text="Darel" />
        <Selectimg bgImg={Astore} text="Ghizer" />
        <Selectimg bgImg={Hunza} text="Hunza" />
        <Selectimg bgImg={Gilgit} text="Gilgit" />
        <Selectimg bgImg={Skardu} text="Skardu" />
      </div>
    </div>
  );
}

export default Select;
