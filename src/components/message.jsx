import React, { Component } from 'react';
import { Icon, Comment } from 'semantic-ui-react';

class Message extends Component {


  render() {
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author>
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
    )
  }
}

export default Message;
