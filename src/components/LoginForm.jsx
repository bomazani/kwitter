import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
  
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            active: false
        }

        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount() {
        this.props.loginUser()
    }
    submitForm( e ) {
            Axios.post( 'https://kwitter-api.herokuapp.com/auth/login' ,{
                username: 'edwin',
                password: 'edwin'

            })
            .then( res => alert( res ) )
    }

    render() {
        return (
            <Segment raised>
                <Form>
                    <Form.Field>
                        <Input placeholder='Username' />
                        <Input placeholder='password' type='password' />
                    </Form.Field>
                    <Button type='submit' onClick={ this.submitForm } >submit</Button>
                </Form>
            </Segment>
        )
    }
}

export default connect()(LoginForm);
