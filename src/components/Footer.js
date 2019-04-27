import React from 'react';
import Logo from '../giphy-attribution.png';

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
      <img src={Logo} alt="Powered by GIPHY" />
    </div>
  );
};

export default Footer;
