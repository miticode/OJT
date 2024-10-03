import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbsGjrkXVDzceNF3X72hw4_JVt9A-MeI",
  authDomain: "ojt2024-e5a1c.firebaseapp.com",
  projectId: "ojt2024-e5a1c",
  storageBucket: "ojt2024-e5a1c.appspot.com",
  messagingSenderId: "693529653380",
  appId: "1:693529653380:web:83ddead0d82d0f649e12d1",
  measurementId: "G-EJFZSZYEEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
