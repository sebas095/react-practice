import React, { Component } from 'react';
import Counter from './components/counter';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

const store = createStore(reducer);

class App extends Component {
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
        <Provider store={ store }>
          <Counter/>
        </Provider>
      </div>
    );
  }
}

export default App;
