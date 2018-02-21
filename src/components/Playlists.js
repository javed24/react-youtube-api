import React, { Component } from 'react';
var queryString = require('query-string');

class showPlaylists extends Component{
  constructor(props){
    super(props);
    this.state ={
      id: ''
    };
  }
  componentDidMount(){
    var playlist = queryString.parse(this.props.location.search)
    this.setState({
        id: playlist.channelId
    });
    console.log(this.state.id);
  }
  render(){
    return(
      <p>Your playlist id is: {this.state.id}</p>
    );
  }
}

export default showPlaylists;
