import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Header from './Header';
import Form from './Form';
import Gifs from './Gifs';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      results: [],
      heading: 'GIF Search Engine',
      limit: 20
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const url = `http://api.giphy.com/v1/gifs/search?q=${
      this.state.text
    }&api_key=${apiKey}&limit=${this.state.limit}`;

    fetch(url)
      .then(response => response.json())
      .then(info => {
        let gifs = info.data;
        this.setState({
          results: gifs,
          heading: this.state.text.toUpperCase()
        });
      })
      .catch(error => alert(error));
  };

  render() {
    const { heading, results } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Header heading={heading} />
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Gifs results={results} />
      </div>
    );
  }
}

export default Home;
