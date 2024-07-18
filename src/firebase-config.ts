// firebase-config.js
// import firebase from "firebase/app";
// import { getAuth } from "firebase/auth";

// export const firebaseConfig = {
//   apiKey: "AIzaSyDEU5lsMAqTaHG-XtmUTWVeveuoBlpWFQo",
//   authDomain: "socialloginapi-cf1d0.firebaseapp.com",
//   projectId: "socialloginapi-cf1d0",
//   storageBucket: "socialloginapi-cf1d0.appspot.com",
//   messagingSenderId: "615872769937",
//   appId: "1:615872769937:web:1aa0783efa7c6d2f797430",
// };

// const app = firebase.initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEU5lsMAqTaHG-XtmUTWVeveuoBlpWFQo",
  authDomain: "socialloginapi-cf1d0.firebaseapp.com",
  projectId: "socialloginapi-cf1d0",
  storageBucket: "socialloginapi-cf1d0.appspot.com",
  messagingSenderId: "615872769937",
  appId: "1:615872769937:web:1aa0783efa7c6d2f797430",
};

// Initialize Firebase
export const _app = initializeApp(firebaseConfig);
export const _auth = getAuth(_app);
