import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ipcRenderer } from 'electron';

import Application from './components/Application/Application.jsx';
import socketInit, { socketMessageHook } from './socket';
import { notifications } from './store/middleware';

// Reducers
import chat, { loadChats } from './store/Chat';
import ui from './store/UI';
import config, { setConfig } from './store/Config';
import socket from './store/Socket';

// Create redux store
const store = createStore(
  combineReducers({
    chat,
    ui,
    config,
    socket,
  }),

  applyMiddleware(socketMessageHook, notifications),
);

// TODO: Use a env var to disable this on build
window.state = store.getState;

// Configuration for the system
ipcRenderer.on('config', (event, newConfig) => {
  const { dispatch } = store;
  const state = store.getState();

  dispatch(setConfig(newConfig));

  // Create Socket Connection only if there is a new apiServer config
  if (newConfig.apiServer === state.config.apiServer) {
    return;
  }

  socketInit(store);

  loadChats(dispatch, newConfig);
});

ipcRenderer.send('init-config');

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,

  document.getElementById('app'),
);
