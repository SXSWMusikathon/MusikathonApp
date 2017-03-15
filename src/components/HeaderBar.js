import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import { Link } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import AuthDialog from './AuthDialog';
import "./HeaderBar.css";

class HeaderBar extends Component {

  constructor(props){
	super(props);
	this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(){
	this.refs.dialog.handleOpen();
  }

  render() {
	const btnStyle = {
	  fontSize: "large"
	};

	return(
	  <Toolbar className="header-bar-container">
		<ToolbarGroup firstChild={true}>
		  <Link className="nav-item" to="/home"> Home </Link>
		</ToolbarGroup>
		<ToolbarGroup firstChild={true}>
		  <Link className="nav-item" to="/competitions"> Competitions </Link>
		  <Link className="nav-item" to="/sign-in"> Log in </Link>
		  <Link className="nav-item" to="/sign-up"> Sign up </Link>
		  <RaisedButton style={btnStyle} label="Vote" primary={true} onClick={this.handleOpen} />
		  <AuthDialog ref="dialog"/>

		</ToolbarGroup>
	  </Toolbar>
	)
  }
}

export default HeaderBar;
