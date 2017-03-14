import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <Appbar> </Appbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Button color="primary">button</Button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
