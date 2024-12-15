// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPVuoS9Xy-4mAtZJqTVA1a5pwOIIQCzjY",
  authDomain: "ssb-prep-545.firebaseapp.com",
  projectId: "ssb-prep-545",
  storageBucket: "ssb-prep-545.firebasestorage.app",
  messagingSenderId: "753339434685",
  appId: "1:753339434685:web:5a0b8e49e2ba9b483fd9d4",
  measurementId: "G-B1N6R2KCBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();