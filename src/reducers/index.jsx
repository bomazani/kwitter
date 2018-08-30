import { LOGIN_USER, LOG_ERROR, REGISTER_USER, GET_MESSAGES, POST_MESSAGE, LOGOUT_USER, GET_USER, GET_USERS_LIST } from "../actions";

const initialState = { session: {}, user: {}, messages: [], userList: [] }

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                session: {
                    token: action.token,
                    username: action.username,
                    id: action.id,
                    isLoggedIn: action.isLoggedIn
                }
            }
        case REGISTER_USER:
            return {
                ...state,
                user: {
                    username: action.username,
                    displayName: action.displayName
                }
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages:  [ ...action.messages ]
            }
        case POST_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, { text: action.message, likes: [], id: undefined, createdAt: Date() }  ]
            }
        case LOGOUT_USER:
            return {
                ...state,
                session: {}
            }
        case GET_USER:
            return {
                ...state,
                user: action.user
            }
        case GET_USERS_LIST:
            return {
                ...state,
                userList: action.userList.map( user => ( { id: user.id, displayName: user.displayName } ) )
            }
        case LOG_ERROR:
          return {
            ...state,
            errors: [ ...state.errors, action.error ]
          }
        default:
            return state
    }

}