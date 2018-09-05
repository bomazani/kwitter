import React, { Component } from 'react';

import MessageList from "./MessageList";
import "./App.css"
import { Image, Reveal } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

class UserPage extends Component {
    render() {
        return (

            <Grid id="Userpage" celled>
                <Grid.Row>
                <Grid.Column width={3}>
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
                </Grid.Column>
                <Grid.Column width={13}>
                <div id="message">Messages Go Here<MessageList/></div>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <div class="List"> Message List is here
                <Header as='h5' attached='top'>
                Name
                </Header>

                </div>

                <Grid.Column id="List" width={13}>
                  <MessageList/>


                </Grid.Column>
                    </Grid.Column>




                    </Grid.Row>
                </Grid>




        )
    }
}

export default UserPage;