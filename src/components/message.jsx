import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Comment } from 'semantic-ui-react';
import { viewProfile } from '../actions'
import './App.css'

class Message extends Component {


  render() {
    return (
      <Comment.Group>
      <Comment id="message">
        <Comment.Content>
          <Comment.Author onClick={ () => this.props.viewProfile(this.props.id) }>
            {this.props.username}
          </Comment.Author>
          <Comment.Text>
            {this.props.message}
          </Comment.Text>
          <Comment.Actions>
            <Icon color='red' name='heart' /> {this.props.numLikes}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
      </Comment.Group>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
      viewProfile: (id) => dispatch(viewProfile(id))
  }
}

export default connect(undefined, mapDispatchtoProps)(Message);
