import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers';
import App from './container/App';

const initialState = {
  user: {},
  favorite: [],
  body: [],
  roomsByLocation: [],
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
