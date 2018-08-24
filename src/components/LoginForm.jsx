import React from 'react';
import { Segment, Form, Input } from 'semantic-ui-react';
  
class LoginForm extends React.Component {

    render() {
        return (
            <Segment raised>
                <Form>
                    <Form.Field>
                        <Input placeholder='Username' />
                        <Input placeholder='password' type='password' />
                        <Input placeholder='Display Name' />
                    </Form.Field>
                </Form>
            </Segment>
        )    
    }
}


export default LoginForm;