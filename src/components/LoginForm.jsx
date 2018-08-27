import React from 'react';
import { Segment, Form, Input } from 'semantic-ui-react';
  
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <Segment raised>
                <Form>
                    <Form.Field>
                        <Input placeholder='Username' />
                        <Input placeholder='password' type='password' />
                    </Form.Field>
                </Form>
            </Segment>
        )    
    }
}


export default LoginForm;

// ******** NodeJS Native code Snippet for login POST ********

// const http = require("http");

// const options = {
//   "method": "POST",
//   "hostname": [
//     "localhost"
//   ],
//   "port": "3000",
//   "path": [
//     "auth",
//     "login"
//   ],
//   "headers": {
//     "Content-Type": "application/json"
//   }
// };

// const req = http.request(options, function (res) {
//   const chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     const body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(JSON.stringify({ username: 'test', password: 'test' }));
// req.end();



// ******* NodeJS Code Snippet for login POST request ***********

// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://kwitter-api.herokuapp.com/auth/login',
//   headers: 
//    { 'Postman-Token': 'bebac89e-ba5c-4cb5-bd08-4be54d4cbc9f',
//      'Cache-Control': 'no-cache',
//      'Content-Type': 'application/json' },
//   body: { username: 'edwin', password: 'edwin' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });


// ******** HTTP code Snippet for login POST request ********

// POST /auth/login HTTP/1.1
// Host: kwitter-api.herokuapp.com
// Content-Type: application/json
// Cache-Control: no-cache
// Postman-Token: c15cc17e-70ba-4006-8f57-b1ffb42516d5

// {
//   "username": "edwin",
//   "password": "edwin"
// }