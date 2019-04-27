import React from 'react';
import logo from '../assets/giphy-attribution.png';

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/sethbernard"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by <strong>Seth Bernard</strong>
      </a>
      <img src={logo} alt="Powered by GIPHY" />
    </div>
  );
};

export default Footer;
