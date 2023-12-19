// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkaRaLWfKgCJe_ISGiwxl5koqHT-S5ho",
  authDomain: "login-auth-d4801.firebaseapp.com",
  projectId: "login-auth-d4801",
  storageBucket: "login-auth-d4801.appspot.com",
  messagingSenderId: "396569878479",
  appId: "1:396569878479:web:0425b46bc2959f64c2bcba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);