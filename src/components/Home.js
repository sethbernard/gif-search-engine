import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';
import Gifs from './Gifs';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
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

  handleSearch = e => url => {
    e.preventDefault();

    fetch(url)
      .then(response => response.json())
      .then(info => {
        let gifs = info.data;
        this.setState({
          results: gifs,
          heading: this.state.text.toUpperCase()
        });
      })
      .catch(error => console.error(error));
  };

  render() {
    const { heading, results, text, limit } = this.state;
    const { REACT_APP_API_KEY } = process.env;
    return (
      <div className="App">
        <Header heading={heading} />
        <Form
          onChange={this.handleChange}
          onSubmit={e =>
            this.handleSearch(e)(
              `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${REACT_APP_API_KEY}&limit=${limit}`
            )
          }
        />
        <Gifs results={results} />
      </div>
    );
  }
}

export default Home;
