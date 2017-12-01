import React, { Component } from 'react';
import Switcher from './components/switcher';
import Store from './store';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    Store.onChange(this.forceUpdate.bind(this));
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
        </p>
        <div>
          <Switcher
            value={Store.get()}
            onChange={Store.set.bind(Store)} />
        </div>
      </div>
    );
  }
}

export default App;