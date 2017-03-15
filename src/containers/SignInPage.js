import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import BrowserHistory from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import './SignInPage.css';

const accountTypes = {
  PARTICIPANT: "PARTICIPANT",
  HOST: "HOST"
};

export default class SignInPage extends Component {

  static contextTypes =  {
	router: PropTypes.object
  }
  constructor(props) {
	super(props);
	this.state = {
	  accountType: accountTypes.PARTICIPANT,
	  showLoadingView: false
	};
	this.onSignIn = this.onSignIn.bind(this);
	this.onSignUp = this.onSignUp.bind(this);
  }

  handleChange = (event, index, value) => this.setState({accountType: value});

  renderLoadingView() {
	return(
	  <div className="player-flex-container"> 
		<CircularProgress size={80} thickness={5}>
		</CircularProgress>
	  </div>
	);
  }

  onSignIn() {
	if (this.state.accountType == accountTypes.HOST ){
	  this.setState({showLoadingView: true});
	  setTimeout( ()=>{ 
		this.context.router.push('/host-profile'); 
	  }, 2000);
	} else {
	  this.setState({showLoadingView: true});
	  setTimeout( ()=>{ 
		this.context.router.push('/profile'); 
	  }, 2000);
	}
  }

  onSignUp() {
	this.context.router.push('/sign-up');
  }

  renderForm(){
	return(
	  <div>
		<SelectField
		  value={this.state.accountType}
		  onChange={this.handleChange}
		  autoWidth={true}
		>
		  <MenuItem value={accountTypes.PARTICIPANT} primaryText="I'm a participant" />
		  <MenuItem value={accountTypes.HOST} primaryText="I'm a host" />
		</SelectField>
		<br />
		<TextField
		  hintText="Username"
		/><br />
		<TextField
		  hintText="Password"
		  type="password"
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
	)
  }



  render() {
	const container = {
	  padding: "3em 2em",
	  textAlign: "center"
	}
	return (
	  <div style={container}>
		<h2 className="sign-in-header"> Sign In </h2>
		<br />
		{ !this.state.showLoadingView && this.renderForm()}
		{ this.state.showLoadingView && this.renderLoadingView()}
	</div>
	);
  }
}
