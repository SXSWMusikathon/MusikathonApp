import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import BrowserHistory from 'react-router';
const accountTypes = {
  PARTICIPANT: "PARTICIPANT",
  HOST: "HOST"
};

export default class SignInPage extends Component {

  static contextTypes =  {
	router: React.PropTypes.object
  }
  constructor(props) {
	super(props);
	this.state = {
	  accountType: 1
	};
	this.onSignIn = this.onSignIn.bind(this);
	this.onSignUp = this.onSignUp.bind(this);
  }

  handleChange = (event, index, value) => this.setState({accountType: value});

  onSignIn() {
	// this.context.router.push('/competitions');
  }

  onSignUp() {
	this.context.router.push('/sign-up');
  }



  render() {
	const container = {
	  padding: "3em 2em",
	  textAlign: "center"
	}
	return (
	  <div style={container}>
		<h2> Sign In </h2>
		<SelectField
		  value={this.state.accountType}
		  onChange={this.handleChange}
		  autoWidth={true}
		>
		  <MenuItem value={1} primaryText="I'm a participant" />
		  <MenuItem value={2} primaryText="I'm a host" />
		</SelectField>
		<br />
		<TextField
		  hintText="Username"
		/><br />
		<TextField
		  hintText="Password"
		/><br />

	  <RaisedButton 
		onClick={this.onSignIn} 
		label="Sign In" 
		primary={true}
	  />
	  <RaisedButton 
		onClick={this.onSignUp}
		label="Sign Up" 
		primary={false}
	  />
	</div>
	);
  }
}
