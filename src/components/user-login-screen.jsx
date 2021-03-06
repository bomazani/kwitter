import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class UserLoginScreen extends React.Component {
    render() {
      return (
        <div className='Login'>
          <container className="LoginRegister">
            <div className="LoginForm">
              <p>Login Form</p>
              <LoginForm />
              <br/>
            </div>
            <div className="RegisterForm">
              <p>Registration Form</p>
              {/* <div id="mainpage"></div> */}
              <RegistrationForm />
            </div>
          </container>
          </div> )
    }
}

export default UserLoginScreen;