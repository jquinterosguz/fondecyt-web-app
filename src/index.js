import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/app/App'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAnrj50mbySjeieKcHRhSoai6OX_p7H9P0",
  authDomain: "pweb-4798d.firebaseapp.com",
  databaseURL: "https://pweb-4798d.firebaseio.com",
  projectId: "pweb-4798d",
  storageBucket: "pweb-4798d.appspot.com",
  messagingSenderId: "499989633719"
}

const app = firebase.initializeApp(config)
const firestore = firebase.firestore


// firebase.initializeApp({
//   apiKey: '### FIREBASE API KEY ###',
//   authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// });

// Initialize Cloud Firestore through Firebase

var db = firebase.firestore();

db.collection("personas").add({
  firstName: "Francisco",
  lastName: "Terraza",
  email: "fterraza@gmail.com"
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
