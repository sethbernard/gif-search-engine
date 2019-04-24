import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className="Header">
      <h1>{props.heading}</h1>
    </div>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
