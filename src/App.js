import React, { Component } from 'react';
import youtubeSearch from 'youtube-search';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyDLZPb7muYEK8eTT8LDbrCZfHfOicvrY7A';
var opts = {
  maxResults: 10,
  key: API_KEY
};
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchYT = this.searchYT.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //console.log("inside handleChange: "+event.target.value);
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log("you submitted: "+ this.state.value);
    this.searchYT(this.state.value);
    event.preventDefault();
  }


    searchYT(term){
      console.log("hi "+term + " loading is: "+this.state.loading);
      this.setState({
        loading: true
      });

        axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername='+this.state.value+'&key='+API_KEY)
        .then( (response) =>{
          console.log(response.data);
          this.setState({
            loading: false
          });
        })
        .catch(function (error) {
          console.log(error);
        });

/*
      youtubeSearch(term, opts, (err, results) => {
        if(err) return console.log(err);
        console.dir(results);
        this.setState({
          loading: false
        });
        console.log("loading after search: "+this.state.loading);
      });
*/
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value={this.state.loading ? 'Loading...': 'Search'} />
      </form>
    );
  }
}

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
