import React, { Component } from 'react';
import Header from './Header';
import Gifs from './Gifs';
import Footer from './Footer';
import { apiSearch } from '../utils/apiSearch';

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
    const { REACT_APP_API_KEY } = process.env;
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${REACT_APP_API_KEY}`;

    apiSearch(url).then(gifs =>
      this.setState({
        ...this.state,
        results: gifs
      })
    );
  };

  render() {
    const { heading, results } = this.state;
    return (
      <div className="App">
        <Header heading={heading} />
        <Gifs results={results} />
        <Footer />
      </div>
    );
  }
}

export default Trending;
