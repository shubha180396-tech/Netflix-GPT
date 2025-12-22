// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-7zo3-3aEmlQYHOsBu2rx5y7woOCh_gg",
  authDomain: "netflix-gpt-2f577.firebaseapp.com",
  projectId: "netflix-gpt-2f577",
  storageBucket: "netflix-gpt-2f577.firebasestorage.app",
  messagingSenderId: "562905045200",
  appId: "1:562905045200:web:e6a68efd4e7ea0d83766d5",
  measurementId: "G-6PGZ1JCLHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
