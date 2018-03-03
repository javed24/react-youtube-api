import React from 'react';
import axios from 'axios';
import config from '../config.js';
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import Iframe from 'react-iframe';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
var queryString = require('query-string');
const API_KEY = config.API_KEY;
const getSrc = require('get-src');

class playlist extends React.Component{
    constructor(props) {
      super(props);
      var playlist = queryString.parse(this.props.location.search);
        this.state={
          id: playlist.channelId,
          iframe:[]
        }
        // this.state={
        //     id : '',
        //     iframe :  []
        // }
      }
    componentDidMount() {
        var playlist = queryString.parse(this.props.location.search);

        console.log(playlist.channelId);
        //var id = playlist.channelId;
        axios.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cplayer&channelId='+this.state.id+'&maxResults=25&key='+API_KEY)
        .then( (response) =>{
          console.log('req url: '+ "https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cplayer&channelId=" + this.state.id + '&maxResults=25&key=');
          console.log(response.data.items[0].snippet.channelTitle)
          let res = []
          for(let i=0; i<10;i++){
            let oldSrc = (getSrc(response.data.items[i].player.embedHtml))
            let newSrc = "https"+oldSrc.substring(4,oldSrc.length);
            console.log("after concatenation: "+ newSrc)
            res.push(newSrc)
          }
          this.setState({
            id: playlist.channelID,
            iframe: res,
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
          <div>
          <MuiThemeProvider>
          {data === '' && <p>No Playlist!!</p>}
        {data !== '' && <Paper style={header} zDepth={2}>Playlist for: <b>{this.state.title}</b></Paper>}
        <div>
          <ul>
          {data.map(function(name, index){
                    return (
                      <div>
                      <Paper style={style} zDepth={5}>
                      <iframe src={name} height="300px" width="600px"/>
                      </Paper>
                    </div>);
                  })}

            </ul>
        </div>
        </MuiThemeProvider>
        </div>
        )
    }
}
export default playlist;
