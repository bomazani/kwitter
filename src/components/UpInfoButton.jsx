import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { updateInfo } from '../actions';
import { connect } from 'react-redux';


class UpInfoButton extends Component {
    render (){
        return (
            <div className='logout' >
                <a href='/settings'><Button color='blue' type='submit'>Update Info</Button></a>
            </div>
        )}
}

// const mapStatetoProps = state => ()

// const mapDispatchtoProps = dispatch => {}


export default connect()( UpInfoButton );