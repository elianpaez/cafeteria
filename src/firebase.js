// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCltcV_F6OIFbpnzp-H3B4vrpoloWvy2WI",
  authDomain: "cafeteria-3f60c.firebaseapp.com",
  projectId: "cafeteria-3f60c",
  storageBucket: "cafeteria-3f60c.firebasestorage.app",
  messagingSenderId: "180454999114",
  appId: "1:180454999114:web:0458399eaf946fc49852b3",
  measurementId: "G-KPJ7DNQ4HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);