// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0b4rBi3xmO21EtCnYxMara8uhPIYdcz4",
  authDomain: "fire-learning-553bb.firebaseapp.com",
  projectId: "fire-learning-553bb",
  storageBucket: "fire-learning-553bb.appspot.com",
  messagingSenderId: "908553761580",
  appId: "1:908553761580:web:82c7a0cd82d0e0b27c7289",
  measurementId: "G-L3Q3PYHQS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);