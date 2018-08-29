import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Form, Input, Button } from 'semantic-ui-react';
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
            <Grid columns='equal'>
               <Grid.Column></Grid.Column>
               <Grid.Column>
                <Input  placeholder='Username' onChange={this.updateUsername}/>
                <Input  placeholder='Display Name' onChange={this.updateDisplay}/>
                <Input  placeholder='Password' type='password' onChange={this.updatePassword}/>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid>
          </Form.Field>
          <Button inverted color='blue' type='submit' onClick={ () => this.props.registerUser(this.state.username, this.state.displayName, this.state.password) }>submit</Button>
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