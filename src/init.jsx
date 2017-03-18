import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import Application from './components/Application/Application.jsx';

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

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
