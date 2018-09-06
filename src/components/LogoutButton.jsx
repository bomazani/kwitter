import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { logoutUser } from '../actions';
import { connect } from 'react-redux';


class LogoutButton extends Component {

    clearForm = (e) => {
        this.setState({
            username: '',
            password: ''
        })
    }

    render (){
        return (
            <div id='logout' class='logout' className='logout' >
                 <Button color='blue' type='submit' onClick={ () => { this.props.logoutUser(); this.clearForm()}}>Logout</Button> 
            </div>
        )}
}

const mapStatetoProps = state => ({
    session: state.session
})

const mapDispatchtoProps = dispatch => {
    return {
        logoutUser: () => dispatch( logoutUser() )
    }
}


export default connect( mapStatetoProps, mapDispatchtoProps )( LogoutButton );
