import React, { Component } from 'react';

// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;
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
    var id = this.props.ch_id
    return(
      <div>
        <h1>You searched for: {this.props.name}</h1>
        <p>
          Channel description: {this.props.description}
          Channel id: {this.props.ch_id}
        </p>
        <div>
          <Link to = {{
            pathname: '/playlists',
            search: '?channelId='+ id
          }}>
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
