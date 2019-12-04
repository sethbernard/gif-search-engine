import React, { Component } from 'react';
import Header from './Header';
import Gifs from './Gifs';
import Footer from './Footer';
import { apiSearch } from '../utils/apiSearch';

class Popular extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      limit: 25,
      heading: 'POPULAR 📈'
    };
  }

  componentDidMount() {
    this.handleTrending();
  }

  handleTrending = async () => {
    const { limit } = this.state;

    const trendingGifs = await apiSearch('gifs/trending', { limit: limit });

    this.setState({
      ...this.state,
      results: trendingGifs
    });
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

export default Popular;
