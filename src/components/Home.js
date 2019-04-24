import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';
import Gifs from './Gifs';
import Footer from './Footer';
import { apiSearch } from '../utils/apiSearch';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      text: 'puppies',
      results: [],
      heading: 'GIF SEARCH ENGINE',
      limit: 20
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleApi = () => {
    const { text, limit } = this.state;
    const { REACT_APP_API_KEY } = process.env;
    const url = `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${REACT_APP_API_KEY}&limit=${limit}`;

    apiSearch(url).then(gifs =>
      this.setState({
        ...this.state,
        results: gifs,
        heading: this.state.text.toUpperCase()
      })
    );
  };

  handleSearch = e => {
    e.preventDefault();
    this.handleApi();
  };

  componentDidMount() {
    this.handleApi();
  }

  render() {
    const { heading, results } = this.state;
    return (
      <div className="App">
        <Header heading={heading} />
        <Form onChange={this.handleChange} onSubmit={this.handleSearch} />
        <Gifs results={results} />
        <Footer />
      </div>
    );
  }
}

export default Home;
