import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Application from './components/Application/Application.jsx';

// Reducers
import chat from './store/Chat/reducer';

const store = createStore(
  combineReducers({
    chat,
  }),
);

// just for debugging
window.store = store.getState();

const render = function Render () {
  ReactDOM.render(
    <Provider store={store}>
      <Application />
    </Provider>,
    document.getElementById('app'),
  );
};

store.subscribe(() => {
  console.log('DEBUG', store.getState());
});


// Start rendering
render();
