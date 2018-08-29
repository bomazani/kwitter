import Axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const LOG_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER = 'GET_USER';
export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export const loginUser = ( username, password ) => (dispatch, getState) => {
    console.log("username", username)
    console.log("password", password)
    Axios.post( 'https://kwitter-api.herokuapp.com/auth/login', {
        username: username,
        password: password
    }).then(res => {
        if (res.data.success) {
            dispatch( {type: LOGIN_USER, username: username, token: res.data.token, id: res.data.id, isLoggedIn: true} );
            Axios.get( 'https://kwitter-api.herokuapp.com/messages' )
            .then(res => {
                dispatch( {type: GET_MESSAGES, messages: res.data.messages} )
            })
            Axios.get( 'https://kwitter-api.herokuapp.com/users/' + getState().session.id )
            .then(res => {
                dispatch( { type: GET_USER, user: res.data.user } )
            })
        }
        else {
            console.log('Did not return successfully\nError: ', res.data )
        }
      } )
}

export const logoutUser = () => dispatch => {

    dispatch( { type: LOGOUT_USER } )
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

export const postMessageText = ( text ) => ( dispatch, getState ) => {
  console.log( text )
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
  Axios.post( 'https://kwitter-api.herokuapp.com/messages',{
    text: text
  } ).then( ( res ) => {
    console.log( res.data )
    dispatch( { type: POST_MESSAGE, message: text } )
  } )
}

export const logError = ( err ) => dispatch => {
  dispatch( { type: LOG_ERROR, error: err } )
}