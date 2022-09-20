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
      <Selectimg bgimg={Astore} text="Astore" />
    </div>
  );
}

export default Select;
