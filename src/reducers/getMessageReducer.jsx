export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
