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
    <div className="selects">
      <Selectimg bgImg={Ghizer} text="Ghizer" />
      <Selectimg bgImg={Darel} text="Darel" />
      <Selectimg bgImg={Astore} text="Astore" />
      <Selectimg bgImg={Hunza} text="Hunza" />
      <Selectimg bgImg={Gilgit} text="Gilgit" />
      <Selectimg bgImg={Skardu} text="Skardu" />
    </div>
  );
}

export default Select;
