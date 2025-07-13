// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
