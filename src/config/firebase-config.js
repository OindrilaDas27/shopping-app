import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import 'firebase/compat/analytics';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnWL6igLpsumWYQtEUbZ5p4xS7liB8AOU",
  authDomain: "shopping-app-33743.firebaseapp.com",
  projectId: "shopping-app-33743",
  storageBucket: "shopping-app-33743.appspot.com",
  messagingSenderId: "909523266327",
  appId: "1:909523266327:web:0de6c7952ba2888bea6552",
  measurementId: "G-4S1MXVT4XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);