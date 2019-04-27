import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gif extends Component {
  render() {
    const { gif, alt, url } = this.props;
    return (
      <div className="gif">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={gif} alt={alt} />
        </a>
      </div>
    );
  }
}

Gif.propTypes = {
  gif: PropTypes.string,
  alt: PropTypes.string
};

export default Gif;
