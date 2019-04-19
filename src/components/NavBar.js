import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar>
      <List className="nav-bar">
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Trending" component={Link} to="/trending" />
        <Tab label="Random" component={Link} to="/random" />
      </List>
    </AppBar>
  );
};

export default NavBar;
