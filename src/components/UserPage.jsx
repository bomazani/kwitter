import React, { Component } from 'react';
import Message from './message.jsx';
import { Feed, Icon } from 'semantic-ui-react';
import MessageList from "./MessageList";
import "./App.css"
import { Image, Reveal } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class UserPage extends Component {
    render() {
        return (
            <div id="Userpage">
             <Grid celled>
                <Grid.Row >
                 <Grid.Column id="UserPage" width={3} >
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
                    <p> FRIENDS:</p>
                        
                    </Container>
                    </div>
                    
                </Grid.Column>
              
               
                <Grid.Column width={10}>
                <div id="message">Messages Go Here<MessageList/></div>
              
                </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                <Grid.Column width={3}>
                <div>
                 <Button negative>Logout</Button>
                </div>
                </Grid.Column>
                <Grid.Column id="List" width={13}>
                  
                    <Feed>
        <Feed.Event>
        <Feed.Label>
            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        </Feed.Label>
        <Feed.Content>
            <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' />
                4 Likes
            </Feed.Like>
            </Feed.Meta>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='/images/avatar/small/helen.jpg' />
        <Feed.Content>
            <Feed.Summary>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
            <a>
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </a>
            <a>
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </a>
            </Feed.Extra>
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' />
                1 Like
            </Feed.Like>
            </Feed.Meta>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='/images/avatar/small/jenny.jpg' />
        <Feed.Content>
            <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' />
                8 Likes
            </Feed.Like>
            </Feed.Meta>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='/images/avatar/small/joe.jpg' />
        <Feed.Content>
            <Feed.Summary>
            <a>Joe Henderson</a> posted on his page
            <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to where we'd we started,
            then starting all over again. Even if we don't run extra laps that day, we surely will
            come back for more of the same another day soon.
            </Feed.Extra>
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' />
                5 Likes
            </Feed.Like>
            </Feed.Meta>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='/images/avatar/small/justen.jpg' />
        <Feed.Content>
            <Feed.Summary>
            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
            <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
            <a>
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </a>
            <a>
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </a>
            </Feed.Extra>
            <Feed.Meta>
            <Feed.Like>
                <Icon name='like' />
                41 Likes
            </Feed.Like>
            </Feed.Meta>
        </Feed.Content>
        </Feed.Event>
    </Feed>
       
                </Grid.Column>
               </Grid.Row>
                </Grid>
                </div>
        )
    }
}

export default UserPage;