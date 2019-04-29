import React, { Component } from 'react';
import Gif from './Gif';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import { apiSearch } from '../utils/apiSearch';

class Random extends Component {
  constructor() {
    super();

    this.state = {
      results: '',
      rating: 'pg'
    };
  }

  handleRandom = async () => {
    const { rating } = this.state;

    const gifs = await apiSearch('v1/gifs/random', { rating: rating });

    this.setState({
      ...this.state,
      results: gifs
    });
  };

  componentDidMount() {
    this.handleRandom();
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
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

          <div className="random-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Random;
