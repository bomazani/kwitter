import React, { Component } from 'react';
import Message from './message.jsx';


class MessageList extends Component {
    
    render() { 
        return (
            <React.Fragment>
                <ul>
                    {this.props.messages.map(message => <Message key={message.id} username={message.username} message={message.message}/>)}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default MessageList;