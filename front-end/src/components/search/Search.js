/** @format */

import React from 'react';
import './search.css';
function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="left">
          <h2>Luxury Included For People</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="search-col-2">
            <div className="box">
              <diV>
                <h3>No One Include More</h3>
                <p>Lorem Ipsum is simply dummy text of</p>
                <button>View Packages</button>
              </diV>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 10% OFF</h4>
            <p className="timer">12 HOURS LEFT</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Gilgit</option>
                <option value="1">Skardu</option>
                <option value="1">Astore</option>
                <option value="1">Hunza</option>
                <option value="1">Fairy Meadow</option>
                <option value="1">Ghizer</option>
              </select>
            </div>
            <div>
              <diV className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </diV>
              <diV className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </diV>
            </div>
            <button>Rate and Availbilties</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
