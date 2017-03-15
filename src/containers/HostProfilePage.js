import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class HostProfilePage extends Component {

  static contextTypes =  {
	router: PropTypes.object
  }

  constructor() {
	super();
  }

  onCreateContest = ()=> {
	this.context.router.push('/competitions/new');
  }

  render() {
	const container = {
	  padding: "3em 2em",
	  textAlign: "center"
	}

	const formContainer = {
	  padding: "2em 25%"
	}
	return (
	  <div style={container}>
		<h2 className="sign-in-header"> Profile Page </h2>
		<br />
		<div style={formContainer}>
		  <FlatButton 
			onClick={this.onCreateContest} 
			label="Contests by me" 
			fullWidth={true}
		  />
		  <br />
		  <FlatButton 
			onClick={this.onCreateContest} 
			label="My STEMS" 
			secondary={true}
			fullWidth={true}
		  />
		  <br />
		  <FlatButton 
			onClick={this.onCreateContest} 
			label="Create a contest" 
			primary={true}
			fullWidth={true}
		  />
		</div>
		</div>
	);
  }
}
