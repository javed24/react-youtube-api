import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NameForm from './components/NameForm.js';
import Playlists from './components/Playlists.js';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={NameForm} />
            <Route path='/playlists' component={Playlists} />
          </Switch>
      </Router>
    )
  }
}

  export default App;
