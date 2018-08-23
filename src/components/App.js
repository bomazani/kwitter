// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Message from './message.jsx';
import UserLoginScreen from './user-login-screen';

// static files
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { /*  contains login and registration forms */ }
        <UserLoginScreen />

        <Message />
      </div>
    );
  }
}

export default connect()(App);
