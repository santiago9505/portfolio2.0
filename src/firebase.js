import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAA5VwCO1npy4Nc57EF3Ae9kKWLXwkP0mU",
  authDomain: "portfolio-2-47ec2.firebaseapp.com",
  projectId: "portfolio-2-47ec2",
  storageBucket: "portfolio-2-47ec2.appspot.com",
  messagingSenderId: "440104339054",
  appId: "1:440104339054:web:89b6391c5268a32f35887f",
});

var db = firebaseApp.firestore();

export { db };
