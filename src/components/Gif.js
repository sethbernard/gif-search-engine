import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const { gif, alt, fullScreen } = this.props;
    return (
      <div className="gif">
        <img
          src={gif}
          alt={alt}
          style={
            fullScreen
              ? {
                  width: '90%',
                  height: '80vh',
                  border: '1px solid black'
                }
              : null
          }
        />
      </div>
    );
  }
}

export default Gif;
