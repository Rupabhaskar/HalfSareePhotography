// config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDSrdetRBXYg2DpMgcqddzrMtSfUI3PRYA",
  authDomain: "halfsareephotography.firebaseapp.com",
  projectId: "halfsareephotography",
  storageBucket: "halfsareephotography.appspot.com", // ✅ corrected
  messagingSenderId: "495654039798",
  appId: "1:495654039798:web:2f1520e9724ddf555fbcd7",
  measurementId: "G-B4PBZXJW6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
