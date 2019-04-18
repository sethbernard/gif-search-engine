import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Gifs from './components/Gifs';

class App extends Component {
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
    return (
      <div className="App">
        <Header heading={this.state.heading} />
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Gifs results={this.state.results} />
      </div>
    );
  }
}

export default App;
