import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
import './index.css';

var firebaseConfig = {
    apiKey: "AIzaSyD07ZYcEDpqI8QDKvV1bkZeL5C-L8EO5U0",
    authDomain: "carona-56fbc.firebaseapp.com",
    databaseURL: "https://carona-56fbc.firebaseio.com",
    projectId: "carona-56fbc",
    storageBucket: "carona-56fbc.appspot.com",
    messagingSenderId: "838515945848",
    appId: "1:838515945848:web:d82082fdbcda9525"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));

serviceWorker.unregister();