import React, { Component } from 'react';

export class Gif extends Component {
  render() {
    return (
      <div className="gif">
        <img src={this.props.gif} alt={this.props.alt} />
      </div>
    );
  }
}

export default Gif;
