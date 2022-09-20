/** @format */

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h3>Places For Tour</h3>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul className="ul">
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>News room</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul className="ul">
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
