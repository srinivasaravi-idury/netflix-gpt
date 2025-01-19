// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArf8702gnp4h7oC90pheFHjWO3mXIa0Sg",
  authDomain: "netflixgpt-fc3bc.firebaseapp.com",
  projectId: "netflixgpt-fc3bc",
  storageBucket: "netflixgpt-fc3bc.firebasestorage.app",
  messagingSenderId: "756632889825",
  appId: "1:756632889825:web:66382059db4e14ef5a0aa0",
  measurementId: "G-9SQM17PK7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
