import React, { Component } from 'react';
import Gif from './Gif';
import Button from '@material-ui/core/Button';
import { apiSearch } from '../utils/apiSearch';

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
    const { results, fullScreen } = this.state;
    return (
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Gif gif={results.image_original_url} fullScreen={fullScreen} />
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
