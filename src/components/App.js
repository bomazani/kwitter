// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

// Components
import MessageList from './MessageList.jsx';
import UserLoginScreen from './user-login-screen';
import Header from './Header.jsx';
import UserSettings from "./UserSettings";

import UserPage from "./UserPage.jsx";


// static files
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
       
       <UserSettings/>

        </div>
    );
  }
}

const mapStatetoProps = state => ({
  loginuser: state.session.username
})

export default connect(mapStatetoProps, undefined)(App);
