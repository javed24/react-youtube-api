import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './components/NameForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Youtube</h1>
        </header>
        <div>
          <NameForm/>
        </div>
      </div>

    );
  }
}

export default App;
