import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Application from './components/Application/Application.jsx';

// Reducers
import chat from './store/Chat/reducer.js';

const store = createStore(
  combineReducers({
    chat: chat
  })
);

const render = function () {
  ReactDOM.render(
    <Provider store={store}>
      <Application />
    </Provider>,
    document.getElementById('app')
  )
}

const unsubscribe = store.subscribe(() => {
  console.log('DEBUG', store.getState());
  render();
});


// Start rendering
render();
