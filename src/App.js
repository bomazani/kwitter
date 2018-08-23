import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './components/message.jsx';

import logo from './logo.svg';
import './App.css';
import UserLoginScreen from './components/user-login-screen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Message />
        <UserLoginScreen/>
      </div>
    );
  }
}

export default connect()(App);
