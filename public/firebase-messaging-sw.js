/* global importScripts */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

/* global firebase */
firebase.initializeApp({
    messagingSenderId: "497531508979"
});

const messaging = firebase.messaging();
