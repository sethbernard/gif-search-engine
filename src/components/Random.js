import React, { Component } from 'react';
import Gif from './Gif';

class Random extends Component {
  constructor() {
    super();

    this.state = {
      results: '',
      heading: 'RANDOM',
      fullScreen: true
    };
  }

  handleRandom = () => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${
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

  componentDidMount() {
    this.handleRandom();
  }

  render() {
    const { results, fullScreen } = this.state;
    return (
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Gif gif={results.image_original_url} fullScreen={fullScreen} />
      </div>
    );
  }
}

export default Random;
