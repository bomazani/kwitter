import React, { Component } from 'react';
import Message from './message.jsx';
import { Header, Icon } from 'semantic-ui-react';
import MessageList from "./MessageList";
import "./App.css"
import { Image, Reveal } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
class UserPage extends Component {
    render() {
        return (
            <div id="Userpage">
                <div id="headerImg">
                <Reveal animated='move'>
                <Reveal.Content visible>
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
                </Reveal.Content>
                </Reveal>
                <Container>
                    <p>
                  USERNAME:
                  </p>
                  <p>LIKES:</p>
                 <p> MESSAGES:</p>                    
                </Container>
                </div>
                <div class="container">
                <div id="message">Messages Go Here<MessageList/></div>
                <div class="List"> Message List is here
                <Header as='h5' attached='top'>
                Name
                </Header>
                <MessageList />
                </div>
                </div>
        </div>
        )
    }
}

export default UserPage;