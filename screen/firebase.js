import * as firebase from 'firebase' ;

var firebaseConfig = {
    apiKey: "AIzaSyBiZlann0rx_F051nO3uJHJ71wdN_6srxA",
    authDomain: "gosdk-6e542.firebaseapp.com",
    databaseURL: "https://gosdk-6e542.firebaseio.com",
    projectId: "gosdk-6e542",
    storageBucket: "gosdk-6e542.appspot.com",
    messagingSenderId: "469226807266",
    appId: "1:469226807266:web:f1534d79056a57de"
  };
  
  // Initialize Firebase
  
 export const firebaseApp = firebase.initializeApp(firebaseConfig);