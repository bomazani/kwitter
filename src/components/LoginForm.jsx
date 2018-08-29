import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Form, Input, Button } from 'semantic-ui-react';
import { loginUser, logoutUser } from '../actions';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const { session } =  this.props

        return (
            <Segment raised>
            <Grid columns='equal'>
               <Grid.Column></Grid.Column>
               <Grid.Column>
                <Form>
                    <Form.Field>
                        <Input value={this.state.username} placeholder='Username' onChange={this.updateUsername}/>
                        <Input value={this.state.password} placeholder='Password' type='password' onChange={this.updatePassword}/>
                    </Form.Field>
                    <Button inverted color='blue' type='submit' onClick={ () => this.props.loginUser(this.state.username, this.state.password) }>Login</Button>
                    { session.isLoggedIn && <Button inverted color='blue' type='submit' onClick={ () => this.props.logoutUser()}>Logout</Button> }
                </Form>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid>
            </Segment>
        )
    }
}

const mapStatetoProps = state => ({
    session: state.session
})

const mapDispatchtoProps = (dispatch) => {
    return {
        loginUser: (username, password) => dispatch(loginUser(username, password)),
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginForm);
