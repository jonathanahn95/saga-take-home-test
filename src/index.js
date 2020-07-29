import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import reducers from './state/reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './state/sagas/index';
import { HashRouter } from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
