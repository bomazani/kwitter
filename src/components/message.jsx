import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Comment } from 'semantic-ui-react';
import { viewProfile, deleteLike, postLike } from '../actions';
import './App.css';

class Message extends Component {

		toggleLike = ( e ) => {
		console.log( 'event', e, '\n', 'liked?', this.props, 'this', this )
		if ( this.props.userLike ) {
			deleteLike( this.props.message.id )
		} else {
			postLike( this.props.message.id )
		}

	}

	delete = ( e ) => {
		this.props.deleteLike( this.props.message.id )
	}

	render() {
		return (
			<Comment className="message">
				<Comment.Content>
				  <Comment.Avatar src='../images/KwitterBackground.jpg' />
					<Comment.Author onClick={ () => this.props.viewProfile( this.props.message.userId ) }>
						{ this.props.username }
					</Comment.Author>
					<Comment.Text>
						{ this.props.message.text }
					</Comment.Text>
					<Comment.Actions onClick={ this.toggleLike } >
						<Icon color='red' name='heart' /> { this.props.message.likes.length }
					</Comment.Actions>
				</Comment.Content>
				<Button inverted color='red' onClick={ this.delete }>X</Button>
			</Comment>
		)
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		viewProfile: id => dispatch( viewProfile( id ) ),
		deleteLike: id => dispatch( deleteLike( id ) ),
		postLike: id => dispatch( postLike( id ) )
	}
}

export default connect(undefined, mapDispatchtoProps) (Message);
