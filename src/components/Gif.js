import React, { Component } from 'react';

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

export default Gif;
