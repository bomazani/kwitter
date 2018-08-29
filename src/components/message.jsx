import React, { Component } from 'react';
import { Icon, Comment } from 'semantic-ui-react';

class Message extends Component {


  render() {
    return (
      <Comment.Group>

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
        </Comment.Group>
    )
  }
}

export default Message;
