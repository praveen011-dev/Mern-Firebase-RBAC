import { meta } from "@eslint/js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: meta.env.VITE_FIREBASE_API_KEY,
  authDomain: meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth export
export const auth = getAuth(app);
