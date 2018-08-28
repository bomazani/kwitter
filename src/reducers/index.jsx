import { LOGIN_USER, REGISTER_USER, GET_MESSAGE } from "../actions";

const initialState = { session: {} }

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                session: {
                    token: action.token,
                    id: action.id
                }
            }
        case REGISTER_USER:
            return {
                ...state,
                user: {
                    
                }
            }
        case GET_MESSAGE:
            return {
                result: action.payload
            }
        default:
            return state
    }

}