import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import Message from './message.jsx';
import { connect } from 'react-redux';
import { postMessageText } from '../actions'
import './App.css'

class MessageList extends Component {
    state = {
        message: '',
        users: [],
        loaded: false
    }

    updateMessage = (e) => {
        this.setState({
          message: e.target.value,

        })
    }

    getPostUsername = ( users, id ) => {
        return users.find( user => user.id === id ).displayName
    }

    componentDidMount = () => {
      this.setState( { loaded: true } )
    }

    render() {
        return (
          <React.Fragment>
              <div id="messagecontainer">
              <Form  onSubmit={ () => this.props.postMessageText( this.state.message ) }>
                  <Input id="inputmessage" value={ this.state.message } placeholder='New Message' onChange={ this.updateMessage }/>
                  <Button >Submit</Button>
                </Form>
                <ul>
                  { this.props.messageList.map( message => <Message key={ Date.now().toString() + message.id }
                                                                username={ this.getPostUsername( this.props.userList, message.userId ) } 
                                                                message={ message.text } 
                                                                numLikes={ message.likes.length }/> ) }
                </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => ({
    messageList: state.messages,
    userList: state.userList
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    postMessageText: ( text, key ) => dispatch( postMessageText( text, key ) )
  }
}

export default connect( mapStatetoProps, mapDispatchToProps )( MessageList );