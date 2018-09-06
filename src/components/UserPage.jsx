import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react'
import MessageList from "./MessageList";
import "./App.css"
import { Grid } from 'semantic-ui-react'
import { Header , Button } from 'semantic-ui-react'
import UserSettings from './UserSettings';
import RefreshButton from './RefreshButton.jsx';
import KA from '../images/KA.png'
import { Card, Icon, Image } from 'semantic-ui-react'

class UserPage extends Component {
    render() {
        return (

            <Grid id="Userpage" celled>
                <Grid.Row>
                <Grid.Column width={3}>
                <div id="headerImg">
                <Card>
                    <Image src={KA} />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
                </div>
                </Grid.Column>
                <Grid.Column width={13}>
                <div id="NavBar">  <Menu secondary>
                        <Menu.Item name='home' active={UserPage === 'home'} onClick={this.handleItemClick} />
                        <Menu.Item
                        name='messages'
                        active={UserSettings === 'messages'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='friends'
                        active={MessageList === 'friends'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input id="navbarinput" icon='search' placeholder='Search...' />
                        </Menu.Item>
                        <Menu.Item/>
                           <Button negative>Logout</Button>
                        
                        </Menu.Menu>
                    </Menu>
                    <RefreshButton/>
                    </div>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src= {KA} />
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