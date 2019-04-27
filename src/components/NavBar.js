import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <AppBar className="nav-bar">
        <List>
          <Tabs
            value={value}
            onChange={this.handleChange}
            TabIndicatorProps={{ style: { backgroundColor: '#F5F5F5' } }}
          >
            <Tab label="Home" component={Link} to="/" value={0} />
            <Tab label="Trending" component={Link} to="/trending" value={1} />
            <Tab label="Random" component={Link} to="/random" value={2} />
          </Tabs>
        </List>
      </AppBar>
    );
  }
}

export default NavBar;
