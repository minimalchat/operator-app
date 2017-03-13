import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import Application from './components/Application/Application.jsx';

// Reducers
import chat from './store/Chat/reducer';


// middleware
const logger = createLogger();        // TODO: make DEV only.


// Create redux store
const store = createStore(
  combineReducers({
    chat,
  }),

  applyMiddleware(logger)             // NOTE: `logger` must come last
);


// Debugging Tooling
store.subscribe(() => console.log('DEBUG', store.getState()));
window.store = store.getState();


ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
