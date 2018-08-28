import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import { registerUser } from '../actions'

class RegistrationForm extends Component {
  state = {
    username: '',
    displayName: '',
    password: ''
  }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }  

  updateDisplay = (e) => {
    this.setState({
      displayName: e.target.value
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <Segment raised>
        <Form>
          <Form.Field>
            <Input transparent placeholder='Username' onChange={this.updateUsername}/>
            <Input transparent placeholder='Display Name' onChange={this.updateDisplay}/>
            <Input transparent placeholder='Password' type='password' onChange={this.updatePassword}/>
          </Form.Field>
          <Button type='submit' onClick={ () => this.props.registerUser(this.state.username, this.state.displayName, this.state.password) }>submit</Button>
        </Form>
      </Segment>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
      registerUser: (username, displayName, password) => dispatch(registerUser(username, displayName, password))
  }
}

export default connect(undefined, mapDispatchtoProps)(RegistrationForm);