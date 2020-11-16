import firebase from 'firebase';


export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await Notification.requestPermission();
        const token = await messaging.getToken();
        console.log('token: ', token);
        return token;
    } catch (error) {
        console.error(error);
    }
};


    // apiKey: "AIzaSyD36XRPXJiZ0Kmx5xQXx5kSncUak5m02lU",
    // authDomain: "healthyu-app.firebaseapp.com",
    // databaseURL: "https://healthyu-app.firebaseio.com",
    // projectId: "healthyu-app",
    // storageBucket: "healthyu-app.appspot.com",
    // messagingSenderId: "497531508979",
    // appId: "1:497531508979:web:0364ed9baeb95a54173f86",
    // measurementId: "G-9TC3WY9D1B"