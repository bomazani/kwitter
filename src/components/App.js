// Libraries that have been installed with package
// managers like npm or yarn

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
import MessageList from './MessageList.jsx';
import UserLoginScreen from './user-login-screen.jsx';
import Header from './Header.jsx';
import UserSettings from './UserSettings.jsx';
// import UserPage from "./UserPage.jsx";
import RefreshButton from './RefreshButton.jsx';

import ProfileCard from './ProfileCard.jsx'
import LogoutButton from './LogoutButton.jsx';

import { exitView } from '../actions';


// static files
import './App.css';

class App extends Component {
  render() {
    return (
      <container className="App">
        <container className='FlexContainer'>

          <container className='TitleContainer'>
            <div className='LeftTitle'>
              {/* RefreshButton */}
              <div className='RefreshButton'>
                <RefreshButton/>
                {this.props.profileHasBeenClicked && <ProfileCard />}
              </div>

            </div>
            <div className='CenterTitle'>
              <Header/>
            </div>
            <div className='RightTitle'>
              <div className='LogoutButton'>
                <LogoutButton/>
              </div>
            </div>
          </container>
          <container className='InnerContainer'>
            <div className='Heading'>  
              {/* <div className='RefreshButton'>
                <RefreshButton/>
                {this.props.profileHasBeenClicked && <ProfileCard />}
              </div> */}
              
              
            </div> 
              <div className='Hello'>
                <div>
                  <div>Hello, {this.props.loginuser? this.props.loginuser : 'Please Login or Register'}! </div>
                </div>
              </div>

              <div className='DisplayWindow'>
                <Segment>
                  <Switch>
                    <Route exact path='/' render={() => (<UserLoginScreen/>) } />
                    <Route path='/messages' render={() => ( <MessageList/> ) } />
                    <Route path='/settings' render={() => (<UserSettings/>) } />
                  </Switch>
                </Segment>
              </div>
          </container>
        </container>
      </container>
    );
  }
}

const mapStatetoProps = state => ({
  messageArray: state.messages,
  loginuser: state.session.username,
  profileHasBeenClicked: state.profileHasBeenClicked
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    exitView: () => dispatch( exitView() )
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
