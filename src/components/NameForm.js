import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results.js';
import config from '../config.js';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Card} from 'material-ui/Card';
const API_KEY = config.API_KEY;

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: false,
      channelName: null,
      channelDescription: null,
      channelImage: '',
      channelId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchYT = this.searchYT.bind(this);
  }

  handleChange(event) {
    this.setState({
      //value: event.target.value
      channelName:'',
      channelDescription:'',
      channelImage:'',
      channelId:null,
      value: event.target.value});

      //console.log("value is: "+this.state.value);
    }

    handleSubmit(event) {
      this.searchYT(this.state.value);
      //console.log("handled submit");
      event.preventDefault();
    }

    searchYT(term){
      this.setState({
        loading: true
      });

      //axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&forUsername='+this.state.value+'&key='+API_KEY)
      //youtube.search.list takes care of spaces in the username
      axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=='+this.state.value+'&type=channel&key='+API_KEY)
      .then( (response) =>{
        // console.log(response.data.items[0].snippet.title);
        // console.log(response.data.items[0].snippet.description);
        // console.log("id: "+response.data.items[0].snippet.channelId);
        this.setState({
          loading: false,
          channelName: response.data.items[0].snippet.title,
          channelDescription: response.data.items[0].snippet.description,
          channelImage: response.data.items[0].snippet.thumbnails.default.url,
          channelId: response.data.items[0].snippet.channelId
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render() {
      var cardStyle={
        maxWidth:'20em',
        minWidth:'10em',
        marginLeft:'auto',
        marginRight:'auto',
        minHeight: '6em'
      };
      var buttonStyle={
        marginLeft:'100px',
        display:'inline-block',
      };
      var textFieldStyle={
        marginTop: '5px',

        marginLeft: '28px'
      };
      var header={
        display: 'inline-block',
        margin: 20,
        backgroundColor:'#f44242',
        textAlign: 'center',
        padding:'20px'
      }
      return(
        <div>
          <MuiThemeProvider>
            <div>
              <Paper style={header} zDepth={2}>Youtube Browser</Paper>
              <Card style={cardStyle}>
                <TextField
                  hintText="Type a YouTuber's Name"
                  type = "text"
                  style = {textFieldStyle}
                  value={this.state.value}
                  onChange={this.handleChange}
                /><br />
                <RaisedButton primary={true} style={buttonStyle} label={this.state.loading ? 'Loading...': 'Search'}
                  onClick = {this.handleSubmit}
                />
              </Card>
            </div>
          </MuiThemeProvider>

          <div>
            <Results
              myapi_key = {API_KEY}
              name = {this.state.channelName}
              description = {this.state.channelDescription}
              image = {this.state.channelImage}
              ch_id = {this.state.channelId}
              />
          </div>
        </div>
      );
    }
  }

  export default NameForm;
