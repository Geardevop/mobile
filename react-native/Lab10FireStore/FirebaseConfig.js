// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgf7W2LAlgrMKCsikm_2szcBXVHWHvQxE",
  authDomain: "mobile-lab10-3576f.firebaseapp.com",
  projectId: "mobile-lab10-3576f",
  storageBucket: "mobile-lab10-3576f.appspot.com",
  messagingSenderId: "445147335206",
  appId: "1:445147335206:web:b7a1a56ac19399a414f4e7",
  measurementId: "G-Y01PM4SE7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };