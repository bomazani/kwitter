import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import primaryReducer from './reducers/primaryReducer'

export default function configureStore() {
  return createStore(
    primaryReducer,
    applyMiddleware(thunk)
  );
}
