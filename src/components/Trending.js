import React, { Component } from 'react';
import Header from './Header';
import Gifs from './Gifs';

class Trending extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      limit: 25,
      heading: 'TRENDING TODAY'
    };
  }

  componentDidMount() {
    this.handleTrending();
  }

  handleTrending = () => {
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${
      process.env.REACT_APP_API_KEY
    }`;

    fetch(url)
      .then(response => response.json())
      .then(info => {
        let gifs = info.data;
        this.setState({
          results: gifs
        });
      })
      .catch(error => alert(error));
  };

  render() {
    const { heading, results } = this.state;
    return (
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Header heading={heading} />
        <Gifs results={results} />
      </div>
    );
  }
}

export default Trending;
