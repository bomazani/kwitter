import React, { Component } from 'react';
import { updateInfo } from '../actions';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class UserSettings extends Component {
    state = {
        displayName: '',
        password: '',
        about: ''
    }

    updateDisplayName = (e) => {
        this.setState({
            displayName: e.target.value
        })
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    updateAbout = (e) => {
        this.setState({
            about: e.target.value
        })
    }
    render() {
        return (
            <div className='Login'>
                <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Change Display Name' placeholder='New Display Name' onChange={this.updateDisplayName} />
                      <Form.Input fluid label='Change Password' placeholder='New Password' onChange={this.updatePassword} />
                    </Form.Group>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' onChange={this.updateAbout} />
                    <Form.Button onClick={() => {this.props.updateInfo(this.state.displayName, this.state.password, this.state.about)}}>Submit</Form.Button>
                  </Form>
                  <br/>
                  <div>
                 <Button negative>Logout</Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
      updateInfo: ( displayName, password, about ) => dispatch( updateInfo( displayName, password, about ) )
    }
  }

export default connect(undefined, mapDispatchToProps)(UserSettings);