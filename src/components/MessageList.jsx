import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import Message from './message.jsx';
import { connect } from 'react-redux';
import { postMessageText } from '../actions'

class MessageList extends Component {
    state = {
        message: ''
    }

    updateMessage = (e) => {
        this.setState({
          message: e.target.value
        })
    }

    render() {
        return (
          <React.Fragment>
              <Form onSubmit={ () => this.props.postMessageText( this.state.message ) }>
                  <Input value={this.state.message} placeholder='New Message' onChange={ this.updateMessage }/>
                  <Button inverted color='blue'>Submit</Button>
                </Form>
                <ul>
                    {this.props.messageList.map(message => <Message key={message.id} username={message.id} message={message.text} numLikes={message.likes.length}/>)}
                </ul>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => ({
    messageList: state.messages
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    postMessageText: ( text ) => dispatch( postMessageText( text ) )
  }
}

export default connect( mapStatetoProps, mapDispatchToProps )( MessageList );