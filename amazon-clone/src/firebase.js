import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyCIzqMKYSC0Nnf6gOP2sNTI-BxJLCX6hlU",
  authDomain: "clone-25965.firebaseapp.com",
  databaseURL: "https://clone-25965.firebaseio.com",
  projectId: "clone-25965",
  storageBucket: "clone-25965.appspot.com",
  messagingSenderId: "901480234276",
  appId: "1:901480234276:web:3dd7d8b8fd9270a201c7b1",
  measurementId: "G-YLDE176XG5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
