import Axios from 'axios';
import { push } from 'connected-react-router';

export const LOGIN_USER = 'LOGIN_USER';
export const LOG_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER = 'GET_USER';
export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_LIKE = 'POST_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const VIEW_PROFILE = 'VIEW_PROFILE';
export const EXIT_VIEW = 'EXIT_VIEW';
export const UPDATE_INFO = 'UPDATE_INFO';

const API_URL = 'https://kwitter-api.herokuapp.com';

export const loginUser = ( username, password ) => (dispatch, getState) => {
    console.log("username", username)
    console.log("password", password)
    Axios.post( API_URL + '/auth/login', {
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
            Axios.get( API_URL + '/users?limit=1000' ).then( res => {
                console.log( typeof( res.data.users ), "\n", res.data.users )
                dispatch( { type: GET_USERS_LIST, userList: res.data.users } )
            } )
    } ).then( () => {
            // Get logged in users info and save to state
            Axios.get( API_URL + '/users/' + getState().session.id )
            .then(res => {
                dispatch( { type: GET_USER, user: res.data.user } )
            })
            // Call getMessages
    } ).then( () => {
        dispatch( push( '/messages' ) )
    } ).then( () => {
        dispatch( getMessages() )
    } )
}

export const getMessages = (limit = 1000) => dispatch =>{
    // Get messages and save to state
    Axios.get( API_URL + '/messages?limit=' + limit ).then(res => {
        dispatch( { type: GET_MESSAGES, messages: res.data.messages } )
    }).catch( e => console.log( 'getMessages', e ) )
}

export const logoutUser = () => dispatch => {

    dispatch( { type: LOGOUT_USER } )
    dispatch( push('/'))
}

export const registerUser = (username, displayName, password) => dispatch => {
    Axios.post( API_URL + '/auth/register', {
        username: username,
        displayName: displayName,
        password: password
    })
    .then(res => {
        dispatch( {type: REGISTER_USER, username: res.data.username, displayName: res.data.displayName})
    }).catch( e => console.log( 'registerUser', e ) )
}

export const postMessageText = ( text, key ) => ( dispatch, getState ) => {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
    Axios.post( API_URL + '/messages',{
      text: text
    } ).then( ( res ) => {
      dispatch( { type: POST_MESSAGE, message: text, key: key } )
      dispatch( getMessages())
    }).catch( e => console.log( 'postMessageText', e ) )
}

export const viewProfile = id => dispatch => {
    Axios.get( API_URL + '/users/' + id ).then(res => {
        dispatch({ type: VIEW_PROFILE, profileInfo: res.data.user })
    }).catch( e => console.log( 'viewProfile', e ) )
}

export const exitView = () => dispatch => {
    dispatch({ type: EXIT_VIEW })
}

export const logError = ( err ) => dispatch => {
    dispatch( { type: LOG_ERROR, error: err } )
}

export const postLike = id => ( dispatch, getState ) => {
  // set the auth token
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
  console.log( 'POST_LIKE' )
  // post request
  Axios.post( API_URL + '/likes',
    { userId: getState().user.id, messageId: id } ).then( res => {
			console.log( res.data )
      dispatch( { type: POST_LIKE, data: res.data } )
      dispatch( getMessages( getState().session.messageLimit ) )
    } ).catch( e => console.log( e ) )

}

export const deleteLike = id => ( dispatch, getState ) => {
  console.log( 'DELETE_LIKE' )
  let dURL =  API_URL + '/likes/' + id
  console.log( dURL )
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
  Axios.delete( dURL ).then( res => {
		dispatch( { type: DELETE_LIKE, data: res.data } )
    dispatch( getMessages( getState().session.messageLimit ) )
		console.log( res.data )
  } ).catch( e => console.log( 'deleteLike', e ) )

  dispatch( getMessages( getState().session.messageLimit ) )

}

export const deleteMessage = id => ( dispatch, getState ) => {
  console.log( 'DELETE_MESSAGE' )
  let dURL =  API_URL + '/messages/' + id
  console.log( dURL )
  Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
  Axios.delete( dURL ).then( res => {
		dispatch( { type: DELETE_MESSAGE, data: res.data } )
    dispatch( getMessages( getState().session.messageLimit ) )
		console.log( res.data )
  } ).catch( e => console.log( 'deleteMessage', e ) )

  dispatch( getMessages( getState().session.messageLimit ) )

}

export const updateInfo = ( displayName, password, about ) => ( dispatch, getState ) => {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + getState().session.token
    console.log('user info:', displayName, password, about)
    Axios.patch( API_URL + '/users', {
        displayName: displayName === '' ? undefined : displayName,
        password: password === '' ? undefined : password,
        about: about === '' ? undefined : about
    } ).then( res => {
        dispatch( { type: UPDATE_INFO, data: res.data } )
        dispatch(push('/messages'))
    }).catch( e => console.log('updateInfo', e ) )
}

export const goTo = ( endpoint ) => ( dispatch ) => {
    dispatch( push( endpoint ) )
}