// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

// Components
import MessageList from './MessageList.jsx';
import UserLoginScreen from './user-login-screen';
import Header from './Header.jsx';


import UserPage from "./UserPage.jsx";


// static files
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{Header()}</div>
        <div class="greeting">
          <div>Hello, {this.props.loginuser? this.props.loginuser : 'Please Login or Register'}!</div>
        </div>
        <Grid columns='equal'>
          <Grid.Row columns={3}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <UserLoginScreen />
              </Segment>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <MessageList messages={ [] } />
              </Segment>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        </div>
    );
  }
}

const mapStatetoProps = state => ({
  loginuser: state.session.username
})

export default connect(mapStatetoProps, undefined)(App);
