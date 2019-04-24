import React, { Component } from 'react';
import Gif from './Gif';
import Button from '@material-ui/core/Button';
import { apiSearch } from '../utils/apiSearch';

class Random extends Component {
  constructor() {
    super();

    this.state = {
      results: '',
      heading: 'RANDOM'
    };
  }

  handleRandom = () => {
    const { REACT_APP_API_KEY } = process.env;
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_API_KEY}`;

    apiSearch(url).then(gifs =>
      this.setState({
        ...this.state,
        results: gifs
      })
    );
  };

  componentDidMount() {
    this.handleRandom();
  }

  render() {
    const { results } = this.state;
    return (
      <div className="random-container">
        <div className="random-gif">
          <Gif gif={results.image_original_url} />
        </div>
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={this.handleRandom}
        >
          Try Again :)
        </Button>
      </div>
    );
  }
}

export default Random;
