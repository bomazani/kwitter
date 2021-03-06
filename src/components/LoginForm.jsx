import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Form, Input, Button } from 'semantic-ui-react';
import { loginUser, logoutUser } from '../actions';
import { withRouter } from 'react-router-dom';
import LogoutButton from './LogoutButton';

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
// clearForm = (e) => {
//         this.setState({
//             username: '',
//             password: ''
//         })
//     }
    render() {

        return (
            <Segment raised  id="logincolor">
                <Grid columns='equal'>
                <Grid.Column></Grid.Column>
                <Grid.Column>
                  <Form>
                        <Form.Field>
                            <Input value={this.state.username} placeholder='Username' onChange={this.updateUsername}/>
                            <Input value={this.state.password} placeholder='Password' type='password' onChange={this.updatePassword}/>
                        </Form.Field>
                        <Button color='yellow' type='submit' onClick={ () => this.props.loginUser(this.state.username, this.state.password) }>Login</Button>
                        <LogoutButton/>
                    </Form>
                </Grid.Column>
                <Grid.Column></Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

// const mapStatetoProps = state => ({
//     session: state.session
// })

const mapDispatchtoProps = dispatch => {
    return {
        loginUser: ( username, password ) => dispatch( loginUser( username, password ) ),
        logoutUser: () => dispatch( logoutUser() )
    }
}

export default connect( undefined, mapDispatchtoProps )( withRouter( LoginForm ) );
