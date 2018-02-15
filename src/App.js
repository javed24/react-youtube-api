import React, { Component } from 'react';
import youtubeSearch from 'youtube-search';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
//var NameForm = require('./components/NameForm.js');
import NameForm from './components/NameForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <NameForm

          />
        </div>
      </div>

    );
  }
}

export default App;
