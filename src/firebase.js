import * as firebase from 'firebase/app';
import 'firebase/storage'



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

const storage = firebase.storage()

export  {
    storage, firebase as default
}
