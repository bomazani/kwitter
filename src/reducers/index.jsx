import { LOGIN_USER, REGISTER_USER, GET_MESSAGE, LOGOUT_USER } from "../actions";

const initialState = { session: {}, user: {}, message: {} }

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                session: {
                    token: action.token,
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
        case GET_MESSAGE:
            return {
                result: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                session: {}
            }
        default:
            return state
    }

}