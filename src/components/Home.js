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
      heading: '',
      limit: 10
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleApi = async () => {
    const { text, limit } = this.state;

    const gifs = await apiSearch('gifs/search', { q: text, limit: limit });

    this.setState({
      ...this.state,
      results: gifs,
      heading: this.state.text.toUpperCase()
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { limit } = this.state;

    if (limit <= 200) {
      this.handleApi();
    } else if (limit > 200) {
      alert('Please type a number lower than 200 😜');
    } else {
      alert('Please type a number 🙃');
    }
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
