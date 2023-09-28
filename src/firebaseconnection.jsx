// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzSGctKMxJDjuBXUcJyebm1lP21Fj9V9Q",
  authDomain: "oxetech-f9c11.firebaseapp.com",
  projectId: "oxetech-f9c11",
  storageBucket: "oxetech-f9c11.appspot.com",
  messagingSenderId: "277816813990",
  appId: "1:277816813990:web:d5928a42d274c56e1f0767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};