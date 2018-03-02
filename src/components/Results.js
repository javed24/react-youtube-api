import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Link = require('react-router-dom').Link;

class Results extends Component{
  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //
  //   // };
  // }
  render(){
    var name = this.props.name;
    var description = this.props.description;
    var img = this.props.image;
    var channelID = this.props.ch_id;
    return(

      <MuiThemeProvider>
      <div>
      {name && <Card style={{
        minWidth: '20em',
        width:'50%',
        margin: '0 auto',
        border: '2px',
        marginTop: '100px'
      }}>
      <CardHeader
      title={name}
      subtitle="YouTuber"
      avatar={img}
      />
      <CardTitle title={name} subtitle="" />
      <CardText>
      {description}
      </CardText>
      <CardActions>
      <Link to = {{
        pathname: '/Playlists',
        search: '?channelId='+ channelID
      }}>
      <RaisedButton primary={true} label="Show Playlists"/>
      </Link>
      </CardActions>
      </Card>}
      </div>
      </MuiThemeProvider>
    );
  }


}

export default Results;
