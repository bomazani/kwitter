import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import Message from './message.jsx';
import { connect } from 'react-redux';


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
                <Input value={this.state.message} placeholder='New Message' onChange={this.updateMessage}/>
                <Button inverted color='blue'>Submit</Button>
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

export default connect(mapStatetoProps, undefined)(MessageList);