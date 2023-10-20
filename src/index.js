import React from 'react';
import ReactDOM from 'react-dom/client';
import 'os-browserify/auto';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The next 21 lines are what Firebase wanted me to add in order to get this app connected with Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Load environment variables from .env file
require('dotenv').config();
console.log(process.env.API_KEY);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Instructions for initializing Firebase on your machine, and deploying changes to Firebase when your ready, can be found here...
// https://firebase.google.com/docs/hosting/quickstart?hl=en&authuser=0&_gl=1*xvedki*_ga*MTU3MjU3ODYxMS4xNjk1NjIwMjc0*_ga_CW55HF8NVT*MTY5NTYyNDIwMS4yLjEuMTY5NTYyNDQzNC4wLjAuMA..


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
