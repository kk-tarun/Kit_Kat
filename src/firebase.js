// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlD1tMq8v2h2N4eLUfmpEUozT6t8QJTho",
  authDomain: "assignment1-a6c84.firebaseapp.com",
  projectId: "assignment1-a6c84",
  storageBucket: "assignment1-a6c84.appspot.com",
  messagingSenderId: "728299782254",
  appId: "1:728299782254:web:00f0ca66905829c70b667f",
  measurementId: "G-E67894WGHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};