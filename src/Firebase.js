// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXyQfV0NulrWzYK2nwrcaSaHKk2pOGR4o",
  authDomain: "clone-website-6b8db.firebaseapp.com",
  projectId: "clone-website-6b8db",
  storageBucket: "clone-website-6b8db.appspot.com",
  messagingSenderId: "1063159466572",
  appId: "1:1063159466572:web:e878f5ea7e81c1da3602e9",
  measurementId: "G-59L72NMEH6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore (the database)
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

// Export database and authentication to use in other parts of your app
export { db, auth };


