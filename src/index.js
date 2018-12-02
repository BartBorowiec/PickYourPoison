import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './images/background.jpg';
import './index.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';


import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMczAEpcCvTncbL9p_4plfwQIEQ3VmMcA",
    authDomain: "pick-your-poison-7bc4c.firebaseapp.com",
    databaseURL: "https://pick-your-poison-7bc4c.firebaseio.com",
    projectId: "pick-your-poison-7bc4c",
    storageBucket: "pick-your-poison-7bc4c.appspot.com",
    messagingSenderId: "24305692439"
};
firebase.initializeApp(config);


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
