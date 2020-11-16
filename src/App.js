import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import NotificationButton from './NotificationButton';
import firebase from './firebase';

const App = () => {

  useEffect(()=>{
    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token : ',token)
    }).catch((err)=>{
      console.log(err);
      
    })
    messaging.onMessage((payload)=>{
      console.log(payload);
      
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {/* <NotificationButton/> */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
