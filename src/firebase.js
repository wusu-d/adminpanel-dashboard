// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCh6TkxaLAMqfq20_-t7_MdBpsqTI157g4',
  authDomain: 'admin-panel-a0e28.firebaseapp.com',
  projectId: 'admin-panel-a0e28',
  storageBucket: 'admin-panel-a0e28.appspot.com',
  messagingSenderId: '838838745718',
  appId: '1:838838745718:web:2be31f1c4622fdf0f03d57',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();
