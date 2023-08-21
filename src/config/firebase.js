// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3SGuv-oJhExwb1lc1x4SaGbkJIPhEARw",
  authDomain: "my-first-project-ba566.firebaseapp.com",
  projectId: "my-first-project-ba566",
  storageBucket: "my-first-project-ba566.appspot.com",
  messagingSenderId: "61931111730",
  appId: "1:61931111730:web:c4b824ca8b3d8bc78ec32b",
  measurementId: "G-9ZSQDE47J8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)