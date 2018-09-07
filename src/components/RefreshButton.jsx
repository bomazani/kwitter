import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getMessages } from '../actions';

import './App.css';


class RefreshButton extends Component {
    render (){
        return (
            <div id='refresh' className='refresh' >
                <Button onClick={() => this.props.getMessages()}>Refresh Messages</Button>
            </div>
        )}
}

const mapDispatchToProps = ( dispatch ) => {
    return {
      getMessages: () => dispatch( getMessages(200))
    }
  }

export default connect( undefined, mapDispatchToProps )( RefreshButton );