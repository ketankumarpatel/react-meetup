/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.loadTimeMetrics = {};
    window.loadTimeMetrics.componentMountTime = performance.now();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br /><br />



          <a href="https://www.intuit.com/" target="_blank">
            Open test without noreferrer
          </a>


          <br /><br />
          <a href="https://www.intuit.com/" rel="noopener noreferrer" target="_blank">
            Open Intuit
          </a>
        </p>
      </div>
    );
  }
}

export default App;
