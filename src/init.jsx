import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import Application from './components/Application/Application.jsx';

// Reducers
import chat from './store/Chat/reducer';

const parseSearch = function parseSearchStringConfig (string) {
  let buffer = string.replace(/\?/, '');
  let result = {};

  console.log('STRING', buffer.length, JSON.stringify(buffer));
  if (buffer.length === 0) {
    return result;
  }

  buffer = buffer.split('&');

  for (let i = 0; i < buffer.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(buffer, i)) {
      const values = buffer[i].split('=');
      result[values[0]] = values[1];
    }
  }

  return result;
};

// middleware
const logger = createLogger();        // TODO: make DEV only.


// Create redux store
const store = createStore(
  combineReducers({
    chat,
  }),


  applyMiddleware(logger),             // NOTE: `logger` must come last
);

window.config = parseSearch(window.location.search);

console.log('CONFIG', window.config);

ReactDOM.render(
  <Provider store={store}>
    <Application apiServer={window.config.apiServer} operator={window.config.operator} />
  </Provider>,
  document.getElementById('app'),
);
