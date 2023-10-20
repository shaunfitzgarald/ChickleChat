// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getMessaging } from "firebase/messaging";
import { getStorage } from "firebase/storage";
import { getPerformance } from "firebase/performance";

require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize App Check
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('process.env.REACT_APP_RECAPTCHA_SITE_KEY'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});

// Get Firebase services
const analytics = getAnalytics(app); // Initialize Firebase Analytics
const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service
const database = getDatabase(app); // Initialize Realtime Database and get a reference to the service
const messaging = getMessaging(app); // Initialize Firebase Cloud Messaging and get a reference to the service
const storage = getStorage(app); // Initialize Cloud Storage and get a reference to the service
const performance = getPerformance(app); // Initialize Performance Monitoring and get a reference to the service
