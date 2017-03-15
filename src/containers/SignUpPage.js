import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import BrowserHistory from 'react-router';

export default class SignUpPage extends Component {
  static contextTypes =  {
	router: React.PropTypes.object
  }
  constructor(props){
	super(props);
	this.state = {
	  accountType: 1
	};
	this.onSignIn = this.onSignIn.bind(this);
	this.onSignUp = this.onSignUp.bind(this);
  }

  onSignIn() {
	this.context.router.push('/sign-in');
  }

  onSignUp() {
  }

  andleChange = (event, index, value) => this.setState({accountType: value});

  render() {
	const container = {
	  padding: "3em 2em",
	  textAlign: "center"
	};
	return (
	  <div style={container}>
		<SelectField
		  value={this.state.accountType}
		  onChange={this.handleChange}
		  autoWidth={true}
		>
		  <MenuItem value={1} primaryText="Sign up as a participant" />
		  <MenuItem value={2} primaryText="Sign up as a host" />
		</SelectField>
		<br />
		<TextField
		  hintText="Username"
		/><br />
		<TextField
		  hintText="Password"
		  type="password"
		/><br />
		<TextField
		  hintText="Confirm Password"
		  type="password"
		/><br />

	  <RaisedButton 
		onClick={this.onSignUp} 
		label="Sign Up" 
		primary={true}
	  />
	  <RaisedButton 
		onClick={this.onSignIn}
		label="Sign In" 
		primary={false}
	  />
	</div>
	);
  }
}

