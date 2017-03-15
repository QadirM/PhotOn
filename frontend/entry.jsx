//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './util/session_api_util';

const windowFunctions = { login, logout };


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  Object.assign(window, {store: store}, windowFunctions);
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
