import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGR0-hxOGsJ3aFMermb0r-Xc3N9ITnnpI",
  authDomain: "queuing-system-764cf.firebaseapp.com",
  projectId: "queuing-system-764cf",
  storageBucket: "queuing-system-764cf.appspot.com",
  messagingSenderId: "530892877455",
  appId: "1:530892877455:web:303b57fbecca8abf0c4afa",
  measurementId: "G-V5QR1Z8LBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);