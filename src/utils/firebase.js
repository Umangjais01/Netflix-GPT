// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaR-zXwwTa-0Ray9iiaZVfhF2h7KZsWvc",
  authDomain: "netflixgpt-a2814.firebaseapp.com",
  projectId: "netflixgpt-a2814",
  storageBucket: "netflixgpt-a2814.appspot.com",
  messagingSenderId: "10449701816",
  appId: "1:10449701816:web:db1ddccfd056f60620dd4d",
  measurementId: "G-Q6NPWT67BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();