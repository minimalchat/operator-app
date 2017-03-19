import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import Application from './components/Application/Application.jsx';
import socketInit from './store/socket_init.js';

// Reducers
import chat from './store/Chat/reducer';
import ui from './store/Ui/';

// Middleware
const logger = createLogger();        // TODO: make DEV only.

// Create redux store
const store = createStore(
  combineReducers({
    chat,
    ui,
  }),
  applyMiddleware(logger),             // NOTE: `logger` must come last
);


// pass the store into a function that init's the socket biz.
socketInit(store);


ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
