import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Comment } from 'semantic-ui-react';
import { viewProfile } from '../actions';

class Message extends Component {


  render() {
    const { user } = this.props
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

const mapStatetoProps = state => ({
})

const mapDispatchtoProps = (dispatch) => {
  return {
      viewProfile: () => dispatch(viewProfile())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Message);
