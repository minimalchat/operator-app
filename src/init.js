import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Application from './components/Application/Application.jsx';

// Reducers
import ui from './stores/UI/reducer.js';

const store = createStore(
  combineReducers({
    ui: ui
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
