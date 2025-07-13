// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYk_RvoDSHqG4pj4yM0buR3d-9p2hn9Vw",
  authDomain: "voicenote-1.firebaseapp.com",
  projectId: "voicenote-1",
  storageBucket: "voicenote-1.firebasestorage.app",
  messagingSenderId: "892997126752",
  appId: "1:892997126752:web:679e90b7399014729f5105",
  measurementId: "G-MH4J16Q3R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);