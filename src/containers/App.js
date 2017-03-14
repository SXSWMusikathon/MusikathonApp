import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import HeaderBar from './../components/HeaderBar';

class App extends Component {
  props: {
	children: HTMLElement
  };

  render() {
	return (
	  <MuiThemeProvider>
		<div>
		  <HeaderBar />
		  { this.props.children}
		</div>
	  </MuiThemeProvider>
	);
  }
}

export default App;
