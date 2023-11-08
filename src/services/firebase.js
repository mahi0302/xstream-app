import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCi-78SvMkOltkF6pC3Hma5Te6X_jaxjE",
    authDomain: "xstream-app-1ae41.firebaseapp.com",
    projectId: "xstream-app-1ae41",
    storageBucket: "xstream-app-1ae41.appspot.com",
    messagingSenderId: "48799021995",
    appId: "1:48799021995:web:1e75d3e1300e784f4570ee"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db; // Export the Firestore instance