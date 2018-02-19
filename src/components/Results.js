import React, { Component } from 'react';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = require('react-router-dom').Link;
//import NameForm from './NameForm.js';


class Results extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //
    // };
  }
  render(){
    return(
      <div>
        <h1>You searched for: {this.props.name}</h1>
        <p>
          Channel description: {this.props.description}
          Channel id: {this.props.channelId}
        </p>
        <div>
          <Link to = '/playlists'>
            <img src = {this.props.image}
                alt={'Avatar for ' + this.props.name}
            />
          </Link>

        </div>


      </div>
    );
  }

}

export default Results;
