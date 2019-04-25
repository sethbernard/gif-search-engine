import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gif extends Component {
  render() {
    const { gif, alt } = this.props;
    return (
      <div className="gif">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
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
