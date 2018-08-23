import React, { Component } from 'react';
import { Icon, Item } from 'semantic-ui-react';


class Message extends Component {


  render() {
    return (
      <Item.Group>
        <Item.Content>
          <Item.Header>
            Username
          </Item.Header>
          <Item.Description>
            Message text
          </Item.Description>
          <Item.Extra>
            <Icon color='red' name='heart' /> 10 Likes
          </Item.Extra>
        </Item.Content>
      </Item.Group>
    )
  }
}

export default Message;
