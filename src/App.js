import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Trending from './components/Trending';
import Random from './components/Random';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/random" component={Random} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
