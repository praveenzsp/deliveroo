// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2VgywunYa4VRaFThHh0Wi2WwGFmwLtY",
  authDomain: "deliveroo-3b029.firebaseapp.com",
  projectId: "deliveroo-3b029",
  storageBucket: "deliveroo-3b029.appspot.com",
  messagingSenderId: "978792262269",
  appId: "1:978792262269:web:7096722acb7dce2e88df14",
  measurementId: "G-M2V2DZZMPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);