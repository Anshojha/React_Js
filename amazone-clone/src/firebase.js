// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from './firebase'

import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDQ--sWgeCgVQKGXQh18Q-MU0YMsuMS8dg",
    authDomain: "e-clone-a567d.firebaseapp.com",
    projectId: "e-clone-a567d",
    storageBucket: "e-clone-a567d.appspot.com",
    messagingSenderId: "52559770824",
    appId: "1:52559770824:web:4211a1002de9d17bf821fd",
    measurementId: "G-DT60PCTZZS"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig) ;

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth};