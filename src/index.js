// Import from existing Libraries
import React from "react";
import ReactDOM from "react-dom";

// Connect Router
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

// Import redux stufff
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// register the service worker
import registerServiceWorker from "./registerServiceWorker";

// Import App
import App from "./components/App";
import reducers from './reducers';
import 'semantic-ui-css/semantic.css';

// Setup Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup store and history
const history = createBrowserHistory();
const store = createStore( connectRouter(history)(reducers), composeEnhancers(applyMiddleware(thunk), applyMiddleware( routerMiddleware( history)) ));

// Render
ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
