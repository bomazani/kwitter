import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class UserLoginScreen extends React.Component {
    render() {
      return (
        <React.Fragment>
          <p>Login Form</p>
          <LoginForm />
          <br/>
          <p>Registration Form</p>
          <div id="mainpage"></div>
          <RegistrationForm />
          
        </React.Fragment> )
    }
}

export default UserLoginScreen;