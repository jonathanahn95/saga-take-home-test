import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducers from '../../state/reducers/index.js';



test('renders App correctly', () => {
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

  
  render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
})
