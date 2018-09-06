// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

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
      <container className="App">
        <container className='FlexContainer'>
          <container className='InnerContainer'>
            <div className='RefButton'>
              <RefreshButton/>
              {this.props.profileHasBeenClicked && <ProfileCard />}
            </div>
        
              <div className='Heading'>  
                
                  <Header/>
                
              </div>

              <div className='Hello'>            
                <div>
                  <div>Hello, {this.props.loginuser? this.props.loginuser : 'Please Login or Register'}! </div>
                </div>
              </div>

              <div className='Login'>
                <Segment>
                  <UserLoginScreen />
                </Segment>    
              </div>

              <div className='Messages'>
                <Segment>
                  <MessageList messages={ [] } />
                </Segment>
              </div>

              <div className='UserSettings'>
                <Segment>
                  <UserSettings/>
                </Segment>
              </div>
          </container>
        </container>
      </container>
    );
  }
}

const mapStatetoProps = state => ({
  loginuser: state.session.username,
  profileHasBeenClicked: state.profileHasBeenClicked
})

export default connect(mapStatetoProps, undefined)(App);
