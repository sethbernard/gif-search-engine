import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className="header">
      <h1>
        {props.heading === 'PUPPIES'
          ? '🐶 GIF SEARCH ENGINE 🐕 '
          : props.heading}
      </h1>
    </div>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
