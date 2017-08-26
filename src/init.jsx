import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import Application from './components/Application/Application.jsx';
import socketInit, { socketMessageHook } from './store/socket_init.js';

// Reducers
import chat from './store/Chat';
import ui from './store/UI';
import config from './store/Config';
import socket from './store/Socket';

// Create redux store
const store = createStore(
  combineReducers({
    chat,
    ui,
    config,
    socket,
  }),

  applyMiddleware(socketMessageHook),
);

// TODO: use a env var to disable this on build
window.gimmeStore = store.getState;

// pass the store into a function that init's the socket biz.
socketInit(store);


ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('app'),
);
