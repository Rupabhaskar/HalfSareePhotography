// // config.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your actual Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDSrdetRBXYg2DpMgcqddzrMtSfUI3PRYA",
//   authDomain: "halfsareephotography.firebaseapp.com",
//   projectId: "halfsareephotography",
//   storageBucket: "halfsareephotography.appspot.com", // ✅ corrected
//   messagingSenderId: "495654039798",
//   appId: "1:495654039798:web:2f1520e9724ddf555fbcd7",
//   measurementId: "G-B4PBZXJW6P",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);


// ------------------------------

// config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyArmPbEJnu5nR6LJHqOKDBpv7fai2HW_0k",
  authDomain: "halfsareesnapu.firebaseapp.com",
  projectId: "halfsareesnapu",
  storageBucket: "halfsareesnapu.firebasestorage.app",
  messagingSenderId: "1035303629622",
  appId: "1:1035303629622:web:bfa9fb25dec09620e37997",
  measurementId: "G-G4SMN3384G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



