import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

export default function NavBar() {
  return (
    <List className="nav-bar">
      <Button color="primary">Home</Button>
      <Button color="primary">Trending</Button>
      <Button color="primary">Random</Button>
    </List>
  );
}
