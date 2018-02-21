import React, { Component } from 'react';
import logo from './logo.svg';
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Youtube</h1>
        </header>
        <Router>
        <div>
          <Switch>
            <Route exact path='/' component={NameForm} />
            <Route  path='/playlists' component={Playlists} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
        </Router>
      </div>

    );
  }
}

export default App;
