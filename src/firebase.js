import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
//   measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
// };

var firebaseConfig = {
  apiKey: "AIzaSyAR2z8HzquAWgREFpyJLkEPBkjLF_2t_qo",
  authDomain: "beerme-6e075.firebaseapp.com",
  projectId: "beerme-6e075",
  storageBucket: "beerme-6e075.appspot.com",
  messagingSenderId: "661066602408",
  appId: "1:661066602408:web:7af51bebecefff2d79af9d",
  measurementId: "G-FXLPGPZGHS"
};



firebase.initializeApp(firebaseConfig);
firebase.firestore();

var db = firebase.firestore();

export default firebase;