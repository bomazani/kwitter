import React, { Component } from 'react';
import { Segment, Form, Input } from 'semantic-ui-react';

class RegistrationForm extends Component {

  render() {
    return (
      <Segment raised>
        <Form>
          <Form.Field>
            <Input placeholder='Username' />
            <Input placeholder='password' type='password' />
          </Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default RegistrationForm
