import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import Message from './message.jsx';


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
                    {this.props.messages.map(message => <Message key={message.id} username={message.username} message={message.message}/>)}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default MessageList;