import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import App from './app';
import reducers from './reducers';


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(createPromise())));
/* eslint-enable */


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
