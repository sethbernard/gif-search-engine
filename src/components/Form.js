import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.onSubmit}>
          <input
            placeholder="Find some GIFS"
            onChange={this.props.onChange}
            value={this.props.value}
            name="text"
          />
          <input
            placeholder="Number of GIFS"
            value={this.props.value}
            onChange={this.props.onChange}
            name="limit"
          />
          <button>Click me</button>
        </form>
      </div>
    );
  }
}

export default Form;
