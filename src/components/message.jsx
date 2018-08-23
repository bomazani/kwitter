import React, { Component } from 'react';
import { Icon, Comment } from 'semantic-ui-react';

class Message extends Component {


  render() {
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>
            Username
          </Comment.Author>
          <Comment.Text>
            Message text
          </Comment.Text>
          <Comment.Actions>
            <Icon color='red' name='heart' /> 10 Likes
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
  }
}

export default Message;
