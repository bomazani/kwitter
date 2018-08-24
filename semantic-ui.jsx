//INPUT FIELD.
import React from 'react'
import { Input } from 'semantic-ui-react'

const Input = () => <Input transparent placeholder='Search...' />

export default Input

//SUBMIT BUTTON.
import React from 'react'
import { Button } from 'semantic-ui-react'

const SubmitButton = () => (
    <Button inverted color='blue'>
      Submit
    </Button>
)

export default SubmitButton

//DELETE BUTTON.
import React from 'react'
import { Button } from 'semantic-ui-react'

const DeleteButton = () => (
    <Button inverted color='red'>
      Delete
    </Button>
)

export default DeleteButton

//LOGIN BUTTON.
import React from 'react'
import { Button } from 'semantic-ui-react'

const LoginButton = () => (
    <Button inverted color='blue'>
      Login
    </Button>
)

export default LoginButton

//POSTED MESSAGE.
import React from 'react'
import { Segment, Icon, Button } from 'semantic-ui-react'

class Message extends Component {
    render() {
        return (
            <Segment raised>
                <Comment>
                    <Comment.Avatar as='a' src={/* default avatar or avatar custom? */} />
                    <Comment.Content>
                        <Comment.Author>{/* username prop */}</Comment.Author>
                        <Comment.Metadata>
                            <div>{/* timestamp prop */}</div>
                            <div>
                                <Icon name='thumbs-up' />
                                {/* total likes prop */}
                            </div>
                        </Comment.Metadata>
                        <Comment.Text>
                            {/* message prop */}
                        </Comment.Text>
                        <Button circular icon='thumbs-up' />
                    </Comment.Content>
                </Comment>
            </Segment>
        )
    }
}

export default Message
