import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers';
import App from './container/App';

<<<<<<< HEAD
const initialState = {
  user: {},
  favorite: [],
  body: [],
  detailsRooms:[],
  roomsByLocation:[],
};

=======
>>>>>>> afd4872b8d0df82d18633943958f7d868ec0a573

firebase.initializeApp({
  apiKey: 'AIzaSyAzQ_pZ8Kcqth33V6Dd03J2j9GLgvKrUA4',
  authDomain: 'pseudogram-ea422.firebaseapp.com',
  databaseURL: 'https://pseudogram-ea422.firebaseio.com',
  projectId: 'pseudogram-ea422',
  storageBucket: 'pseudogram-ea422.appspot.com',
  messagingSenderId: '79513015735',
  appId: '1:79513015735:web:629dc9114dc98c2da2c432',
  measurementId: 'G-W3PFXFKRKF',
});


const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
