import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import { Link } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import "./HeaderBar.css";

class HeaderBar extends Component {

  constructor(props){
	super(props);
  }


  render() {
	const leftAlign = { textAlign: 'left'};
	const rightAlign = { textAlign: 'right'};
	const middleAlign = { verticalAlign: 'middle'};
	return(
	  <Toolbar>
	  </Toolbar>
	)
  }
}

export default HeaderBar;
