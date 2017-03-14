import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import HeaderBar from './../components/HeaderBar';

class App extends Component {
  props: {
	children: HTMLElement
  };

  render() {
    return (
		<div>
	  <HeaderBar />
	  { this.props.children}
	  </div>
    );
  }
}

export default App;
