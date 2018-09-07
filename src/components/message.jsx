import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Comment } from 'semantic-ui-react';
import { viewProfile, deleteMessage, deleteLike, postLike } from '../actions';
import profileImg from '../images/Lemur_icon.png';
import './App.css';

class Message extends Component {

		toggleLike = ( e ) => {
		console.log( this.props )
    if ( this.props.userLike ) {
			this.props.deleteLike( this.props.userLike.id )
		} else {
			this.props.postLike( this.props.message.id )
		}

	}

	delete = ( e ) => {
		this.props.deleteMessage( this.props.message.id )
	}

	render() {
		return (
			<Comment className="message">
				<Comment.Content>
				 <Comment.Avatar src={profileImg} />
					<Comment.Author onClick={ () => this.props.viewProfile( this.props.message.userId ) }>
						{ this.props.username }
					</Comment.Author>
					<Comment.Text>
						{ this.props.message.text }
					</Comment.Text>
					<Comment.Actions onClick={ this.toggleLike } >
						<Icon inverted={ this.props.userLike? false : true } color={ this.props.userLike? 'red' : 'gray' } bordered={ this.props.userLike? true : true } name='heart' /> { this.props.message.likes.length }
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
		deleteMessage: id => dispatch( deleteMessage( id ) ),
		postLike: id => dispatch( postLike( id ) )
	}
}

export default connect(undefined, mapDispatchtoProps) (Message);
