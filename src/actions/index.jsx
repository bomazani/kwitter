import Axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const LOG_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER = 'GET_USER';
export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const VIEW_PROFILE = 'VIEW_PROFILE';

export const loginUser = ( username, password ) => (dispatch, getState) => {
    console.log("username", username)
    console.log("password", password)
    Axios.post( 'https://kwitter-api.herokuapp.com/auth/login', {
        username: username,
        password: password
    }).then(res => {
        if (res.data.success) {
            dispatch( {type: LOGIN_USER, username: username, token: res.data.token, id: res.data.id, isLoggedIn: true} );

        } else {
            console.log('Did not return successfully\nError: ', res.data )
        }
    } ).then( () => {
            // Get list of users and save to state
            Axios.get( 'https://kwitter-api.herokuapp.com/users' ).then( res => {
                console.log( typeof( res.data.users ), "\n", res.data.users )
                dispatch( { type: GET_USERS_LIST, userList: res.data.users } )
            } )
    } ).then( () => {
            // Get logged in users info and save to state
            Axios.get( 'https://kwitter-api.herokuapp.com/users/' + getState().session.id )
            .then(res => {
                dispatch( { type: GET_USER, user: res.data.user } )
            })
            // Call getMessages
    } ).then( () => {
        dispatch(getMessages())
    } )
}

export const getMessages = (limit = 1000) => dispatch =>{
                // Get messages and save to state
                Axios.get( 'https://kwitter-api.herokuapp.com/messages?limit=' + limit ).then(res => {
                    dispatch( { type: GET_MESSAGES, messages: res.data.messages } )
                })
    
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
    })
}

export const postMessageText = ( text, key ) => ( dispatch, getState ) => {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
    Axios.post( 'https://kwitter-api.herokuapp.com/messages',{
      text: text
    } ).then( ( res ) => {
      dispatch( { type: POST_MESSAGE, message: text, key: key } )
      dispatch( getMessages())
    } )
}

export const viewProfile = (id) => (dispatch) => {
    Axios.get( 'https://kwitter-api.herokuapp.com/users/' + id ).then(res => {
        dispatch({ type: VIEW_PROFILE, profileInfo: res.data.user })
    })
}

export const logError = ( err ) => dispatch => {
    dispatch( { type: LOG_ERROR, error: err } )
}