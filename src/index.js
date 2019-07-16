import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
import './index.css';

var firebaseConfig = {
    apiKey: "AIzaSyCDsqhR0ij0aCedNTNhLsIRJCWsHOwZOeM",
    authDomain: "carona-56fbc.firebaseapp.com",
    databaseURL: "https://carona-56fbc.firebaseio.com",
    projectId: "carona-56fbc",
    storageBucket: "",
    messagingSenderId: "838515945848",
    appId: "1:838515945848:web:d82082fdbcda9525"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));

serviceWorker.unregister();