// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from './firebase'; // Assuming you export 'auth' from firebase.js
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXo-cnC4aUeTgSs5SzMxEZMYA5dt3ZgdI",
  authDomain: "chicklechat.firebaseapp.com",
  databaseURL: "https://chicklechat-default-rtdb.firebaseio.com",
  projectId: "chicklechat",
  storageBucket: "chicklechat.appspot.com",
  messagingSenderId: "999203902324",
  appId: "1:999203902324:web:8c4b58f7cd4beb67be9221",
  measurementId: "G-LGYKTQP23G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Sign up new users
export const signup = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
  };
  
  // Sign in existing users
  export const signin = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  };
  
  // Sign out users
  export const signout = async () => {
    await auth.signOut();
  };
  