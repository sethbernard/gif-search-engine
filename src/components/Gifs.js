import React, { Component } from 'react';
import Gif from './Gif';

class Gifs extends Component {
  render() {
    return (
      <div className="gifs-container">
        {this.props.results.map((gif, index) => {
          return (
            <Gif key={index} gif={gif.images.original.url} alt={gif.title} />
          );
        })}
      </div>
    );
  }
}

export default Gifs;
