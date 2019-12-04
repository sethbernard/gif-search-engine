import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Random from './components/Random';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/random" component={Random} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
