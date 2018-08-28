import Axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER = 'GET_USER';
export const GET_MESSAGE = 'GET_MESSAGE';

export const loginUser = ( username, password ) => dispatch => {
    Axios.post( 'https://kwitter-api.herokuapp.com/auth/login', {
        username: username,
        password: password
    })
    .then(res => {
        if (res.data.success) {
            dispatch( {type: LOGIN_USER, token: res.data.token, id: res.data.id} );
        }
        else {
            console.log("NO")
        }

        console.log(res)} )
}

export const registerUser = (username, displayName, password) => dispatch => {
    Axios.post( 'https://kwitter-api.herokuapp.com/auth/register', {
        username: username,
        displayName: displayName,
        password: password
    })
    .then(res => {
        dispatch( {type: REGISTER_USER, username: res.data.username, displayName: res.data.displayName})
        console.log(res.data)})
}