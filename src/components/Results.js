import React from 'react';
var Link = require('react-router-dom').Link;

function Results(props){
    var id = props.ch_id
    return(
      <div>
        <h1>You searched for: {props.name}</h1>
        <p>
          Channel description: {props.description}
          Channel id: {props.ch_id}
        </p>
        <div>
          <Link to = {{
            pathname: '/playlists',
            search: '?channelId='+ id
          }}>
            <img src = {props.image}
                alt={'Avatar for ' + props.name}
            />
          </Link>
        </div>
      </div>
    );
}

export default Results;
