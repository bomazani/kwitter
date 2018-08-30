import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
const value = [
  {key: 'Yo', text: 'You', value:'You'},
  {key: 'Fr', text: 'Friends', value:"Friends"},
  {key:'Eo', text:'Everyone', value:'Everyone'}
]

class UserSettings extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    render() {
        return (
            <div>
                <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Who see your Profile:</label>
          <Form.Radio
            label='You'
            value='Yo'
            checked={value === 'Yo'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Friends'
            value='Fr'
            checked={value === 'Fr'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Everyone'
            value='Eo'
            checked={value === 'Eo'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Update</Form.Button>
      </Form>
      <br/>
      <div>
                 <Button negative>Logout</Button>
                </div>
            </div>
        )
    }
}

export default UserSettings;