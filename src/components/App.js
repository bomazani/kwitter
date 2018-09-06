// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

// Components
import MessageList from './MessageList.jsx';
import UserLoginScreen from './user-login-screen.jsx';
import Header from './Header.jsx';
import UserSettings from './UserSettings.jsx';
// import UserPage from "./UserPage.jsx";
import RefreshButton from './RefreshButton.jsx';
import ProfileCard from './ProfileCard.jsx'

// static files
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefreshButton/>
        {this.props.profileHasBeenClicked && <ProfileCard />}
        <Grid columns='equal'>
          <Segment>
            <div>Hello, {this.props.loginuser? this.props.loginuser : 'Please Login or Register'}! </div>
            <div><Link to='/settings/'>User Settings</Link></div>
          </Segment>
          <Grid.Row columns={3}>
            <Grid.Column/>
            <Grid.Column>

              <Segment>
                <Header />
              </Segment>

              <Segment>
                <Route exact path='/' component={ UserLoginScreen } />
                <Route exact path='/messages' component={ MessageList } />
                <Route exact path='/settings/' component={ UserSettings } />
              </Segment>

            </Grid.Column>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  loginuser: state.session.username,
  profileHasBeenClicked: state.profileHasBeenClicked
})

export default connect(mapStatetoProps, undefined)(App);
