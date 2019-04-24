import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gif extends Component {
  render() {
    const { gif, alt } = this.props;
    return (
      <div className="gif">
        <img src={gif} alt={alt} />
      </div>
    );
  }
}

Gif.propTypes = {
  gif: PropTypes.string,
  alt: PropTypes.string
};

export default Gif;
