import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class UserLoginScreen extends React.Component {
    render() {
      return (
        <React.Fragment>
          <LoginForm />
          <RegistrationForm />
        </React.Fragment> )
    }
}

export default UserLoginScreen;