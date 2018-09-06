import React, { Component } from 'react';
import { Comment, Input, Button, Form } from 'semantic-ui-react';
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

  onHandleSubmit = (e) => {
    this.props.postMessageText( this.state.message );
    this.setState( { message: ''});
  }

  updateMessage = (e) => {
    this.setState({
      message: e.target.value,

    })
  }

  getPostUsername = ( users, id ) => {
    return users.find( postUser => postUser.id === id ).displayName
  }

  componentDidMount = () => {
    this.setState( { loaded: true } )
  }

  render() {
    return (
      <React.Fragment>
        <div id="messagecontainer">
          <Form className="MessageForm" onSubmit={ this.onHandleSubmit }>
            <Input id="inputmessage" value={ this.state.message } placeholder='New Message' onChange={ this.updateMessage }/>
            <Button className="MessageSubmit" color='yellow'>Submit</Button>
          </Form>
          <Comment.Group>
            { this.props.messageList.map( message => <Message key={ Date.now().toString() + message.id }
              userId={message.userId}
              username={ this.getPostUsername( this.props.userList, message.userId ) }
              message={ message }
              numLikes={ message.likes.length }
							userLike={ message.likes.find( like => like.userId === this.props.userId ) } /> ) }
          </Comment.Group>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  messageList: state.messages,
  userList: state.userList,
	userId: state.user.id
})

const mapDispatchToProps = ( dispatch ) => {
  return {
    postMessageText: ( text, key ) => dispatch( postMessageText( text, key ) )
  }
}

export default connect( mapStatetoProps, mapDispatchToProps )( MessageList );