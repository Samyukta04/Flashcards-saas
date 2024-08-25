// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAO_DXIlKV4NocJc841xXk1gUtsNnOHR8",
  authDomain: "flashcardsaas-c405f.firebaseapp.com",
  projectId: "flashcardsaas-c405f",
  storageBucket: "flashcardsaas-c405f.appspot.com",
  messagingSenderId: "455342519480",
  appId: "1:455342519480:web:631e61feacf30163b0b04d",
  measurementId: "G-KYGFP7CY9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export { db };
