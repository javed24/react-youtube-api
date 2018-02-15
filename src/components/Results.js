import React, { Component } from 'react';
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
        </p>

      </div>
    );
  }

}

export default Results;
