import Axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER = 'GET_USER';
export const GET_MESSAGES = 'GET_MESSAGES';

export const loginUser = ( username, password ) => (dispatch, getState) => {
    console.log("username", username)
    console.log("password", password)
    Axios.post( 'https://kwitter-api.herokuapp.com/auth/login', {
        username: username,
        password: password
    })
    .then(res => {
        if (res.data.success) {
            dispatch( {type: LOGIN_USER, username: username, token: res.data.token, id: res.data.id, isLoggedIn: true} );
            Axios.get( 'https://kwitter-api.herokuapp.com/messages' )
            .then(res => {
                dispatch( {type: GET_MESSAGES, messages: res.data.messages} )
            })
            Axios.get( 'https://kwitter-api.herokuapp.com/users/' + getState().session.id )
            .then(res => {
                dispatch( {type: GET_USER, user: res.data.user} )
            })
        }
        else {
            console.log("NO")
        }

        console.log(res)} )
}

export const logoutUser = () => dispatch => {
    dispatch( {type: LOGOUT_USER} )
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