import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Link = require('react-router-dom').Link;

function Results(props){
  var id = props.ch_id;
  return(
    <div>
    <MuiThemeProvider>
      <Card style={{
            width: '50%',
            margin: '0 auto',
            border: '2px'
        }}>
          <CardHeader
            title={props.name}
            subtitle="YouTuber"
            avatar={props.image}
          />
          <CardTitle title={props.name} subtitle="" />
          <CardText>
            {props.description}
          </CardText>
          <CardActions>
              <Link to = {{
                  pathname: '/playlists',
                  search: '?channelId='+ id
                }}>
                <FlatButton label="Show Playlists"/>
              </Link>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>
  );
}

export default Results;
