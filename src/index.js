import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { fetchAllBadges } from './actions';
import rootReducer from './reducers';

import App from './containers/App';

import './style.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app'),
);

store.dispatch(fetchAllBadges());
