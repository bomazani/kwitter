// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import MessageList from './MessageList.jsx';
import UserLoginScreen from './user-login-screen';

// static files
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Hello, {this.props.loginuser}!</div>
        <UserLoginScreen />
        <br />
        <MessageList messages={[{"username": "tj", "message": "Mikaiyl likes to play with Barbies.", "id": 1},
                                {"username": "bob", "message": "i think male crop tops are in style", "id": 2}]} />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  loginuser: state.session.username
})

export default connect(mapStatetoProps, undefined)(App);
