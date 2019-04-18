import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <TextField
          className="input"
          label="Find GIFS"
          placeholder="Ex: dog"
          onChange={e => this.props.onChange(e)}
          value={this.props.value}
          name="text"
          margin="normal"
        />
        <br />
        <TextField
          className="input"
          label="# of GIFs to display"
          placeholder="Ex: 20"
          value={this.props.value}
          onChange={e => this.props.onChange(e)}
          name="limit"
          margin="normal"
        />
        <br />
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
