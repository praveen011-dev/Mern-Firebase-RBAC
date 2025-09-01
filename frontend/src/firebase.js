import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1TRAOcs4MgTXI4EkOjsMtPIcaVw77s_8",
  authDomain: "mern-stack-firebase-rbac.firebaseapp.com",
  projectId: "mern-stack-firebase-rbac",
  storageBucket: "mern-stack-firebase-rbac.firebasestorage.app",
  messagingSenderId: "729226537900",
  appId: "1:729226537900:web:2b56326de2ba53a9fc6809",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth export
export const auth = getAuth(app);
