import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'



class UserSettings extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    render() {
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Change Display Name' placeholder='New Display Name' />
                      <Form.Input fluid label='Change Password' placeholder='New Password' />
                    </Form.Group>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <Form.Button>Submit</Form.Button>
                  </Form>
                  <br/>
                  <div>
                 <Button negative>Logout</Button>
                </div>
            </div>
        )
    }
}

export default UserSettings;