import React from 'react';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD36XRPXJiZ0Kmx5xQXx5kSncUak5m02lU",
    authDomain: "healthyu-app.firebaseapp.com",
    databaseURL: "https://healthyu-app.firebaseio.com",
    projectId: "healthyu-app",
    storageBucket: "healthyu-app.appspot.com",
    messagingSenderId: "497531508979",
    appId: "1:497531508979:web:0364ed9baeb95a54173f86",
    measurementId: "G-9TC3WY9D1B"
};

firebase.initializeApp(config);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default firebase;