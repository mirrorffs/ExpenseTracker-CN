import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1TJ32jE_9lytWAnjMacOM0Z_ZXA_QhEk",
  authDomain: "expense-tracker-42316.firebaseapp.com",
  projectId: "expense-tracker-42316",
  storageBucket: "expense-tracker-42316.appspot.com",
  messagingSenderId: "438343062667",
  appId: "1:438343062667:web:0755de341fcda49c5ef08e",
  measurementId: "G-JGMB7EH5BW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
