import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

class Form extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <TextField
          className="input"
          placeholder="Find some GIFS"
          onChange={e => this.props.onChange(e)}
          value={this.props.value}
          name="text"
          margin="normal"
        />

        <TextField
          className="input"
          placeholder="Number of GIFS"
          value={this.props.value}
          onChange={e => this.props.onChange(e)}
          name="limit"
          margin="normal"
        />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={e => this.props.onSubmit(e)}
          type="submit"
        >
          Click me
        </Button>
      </form>
    );
  }
}

export default Form;
