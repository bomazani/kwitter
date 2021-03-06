import { POST_LIKE,
    DELETE_LIKE,
    LOGIN_USER,
    LOG_ERROR,
    REGISTER_USER,
    GET_MESSAGES,
    POST_MESSAGE,
    LOGOUT_USER,
    GET_USER,
    GET_USERS_LIST,
    VIEW_PROFILE,
    EXIT_VIEW,
    DELETE_MESSAGE,
    UPDATE_INFO
} from "../actions";

const initialState = { session: {}, user: {}, messages: [], userList: [], clickedProfileInfo: {}, profileHasBeenClicked: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        session: {
          messageLimit: 100,
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
        // messages: [ ...state.messages, { text: action.message, id: action.key, likes: [], userId: state.user.id, createdAt: Date() }  ]
      }
    case LOGOUT_USER:
      return {
        ...state,
        session: {},
        messages: []
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
    case VIEW_PROFILE:
      return {
        ...state,
        clickedProfileInfo: action.profileInfo,
        profileHasBeenClicked: true
      }
    case EXIT_VIEW:
      return {
        ...state,
        profileHasBeenClicked: false
      }
    case POST_LIKE:
      return {
        ...state,
      }
    case DELETE_LIKE:
      return {
        ...state,
      }
    case UPDATE_INFO:
      return {
          ...state,
          user: action.data.user
      }
    default:
      return state
  }

}