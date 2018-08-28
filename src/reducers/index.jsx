import { LOGIN_USER, REGISTER_USER, GET_MESSAGES, LOGOUT_USER, GET_USER } from "../actions";

const initialState = { session: {}, user: {}, messages: [] }

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
                messages: action.messages
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
        default:
            return state
    }

}