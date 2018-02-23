import React, { Component } from 'react';
import config from '../config.js';
import axios from 'axios';
//import Iframe from 'react-iframe';
import ReactHtmlParser from 'react-html-parser';

var queryString = require('query-string');
const API_KEY = config.API_KEY;


class showPlaylists extends Component{
  constructor(props){
    super(props);
    this.state ={
      id: '',
      iframe: [],
      title: ''
    };
  }
  componentDidMount(){
    var playlist = queryString.parse(this.props.location.search)
    this.setState({
      id: playlist.channelId
    });
    console.log(this.state.id);
    //making axios call for the specific channel id
    //https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cplayer&channelId=UCBJycsmduvYEL83R_U4JriQ&maxResults=25&key=AIzaSyDLZPb7muYEK8eTT8LDbrCZfHfOicvrY7A
    axios.get('https:www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cplayer&channelId='+playlist.channelId+'&maxResults=25&key='+API_KEY)
    .then( (response) =>{
      console.log("video id: "+response.data.items[0].player.embedHtml);
      let iFrameArray = [];
      for(let i=0; i<10;i++){
        iFrameArray.push(response.data.items[i].player.embedHtml);
      }
      this.setState({
        id: playlist.channelId,
        iframe: iFrameArray,
        title: response.data.items[0].snippet.channelTitle
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    let _iFrameArray = this.state.iframe
    return(
      <div>
        <p>Showing playlists for {this.state.title}</p>
        <div>
          <ul>
            {_iFrameArray.map((iframe, index) => {
              return <li key = {index}>{ReactHtmlParser(iframe)}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export default showPlaylists;
