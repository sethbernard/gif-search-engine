import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { onSubmit, onChange, value } = this.props;
    return (
      <form onSubmit={e => onSubmit(e)}>
        <TextField
          className="input"
          label="Find GIFs"
          placeholder="Ex: dog"
          onChange={e => onChange(e)}
          value={value}
          name="text"
          margin="normal"
        />
        <br />
        <TextField
          className="input"
          label="# of GIFs to display"
          placeholder="Between 1 and 200"
          value={value}
          onChange={e => onChange(e)}
          name="limit"
          margin="normal"
        />
        <br />
        <Button
          className="btn"
          variant="contained"
          color="primary"
          onClick={e => onSubmit(e)}
          type="submit"
        >
          SEARCH
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
