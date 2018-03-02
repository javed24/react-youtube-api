import React, { Component } from 'react';
import config from '../config.js';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
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
    //var playlist = queryString.parse(this.props.location.search);
    // var id = this.state.id;
    //console.log(id);
    let data = this.state.iframe
    const style = {
      margin: 20,
      minWidth:'300px',
      textAlign: 'center',
      display: 'inline-block',
    };
    const header={
      display: 'inline-block',
      margin: 20,
      textAlign: 'center',
      padding:'20px'
    }
    //console.log("data is"+data)
    return(

      <MuiThemeProvider>
        <div>
          <Paper
            style={header}
            zDepth={2}>
            Playlist for: <b>{this.state.title}</b>
        </Paper>
        <div>
          <ul>
            {data.map(function(name, index){
              return (
                <div>
                  <Paper style={style} zDepth={5}>
                    {ReactHtmlParser(name)}
                  </Paper>
                </div>);
              })}

            </ul>

          </div>
        </div>
      </MuiThemeProvider>

    )
  }
}


export default showPlaylists;
