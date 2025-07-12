// // configB.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // 🔥 Secondary Firebase project config
// const firebaseConfigB = {
//   apiKey: "AIzaSyA3ZVkbldNlWihUNqH4h-YTTfqPlii9fKE",
//   authDomain: "sampleproject-e1244.firebaseapp.com",
//   projectId: "sampleproject-e1244",
//   storageBucket: "sampleproject-e1244.appspot.com", // ✅ fixed typo from `.firebasestorage.app`
//   messagingSenderId: "445626195122",
//   appId: "1:445626195122:web:00f6eef964d5c5ace27dab",
//   measurementId: "G-RSXW28LSSW",
// };

// // ✅ initialize with a unique name (avoid conflict with default app)
// const appB = initializeApp(firebaseConfigB, "secondary");

// export const dbB = getFirestore(appB);
// export const authB = getAuth(appB);


// ----------------------------------------------------------------------


// configB.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Secondary Firebase project config
const firebaseConfigB = {
apiKey: "AIzaSyD8sIZ0STZ6NWRidXoWxFAJhX9I84Wz-sc",
  authDomain: "packgesforsnapu-fa4fb.firebaseapp.com",
  projectId: "packgesforsnapu-fa4fb",
  storageBucket: "packgesforsnapu-fa4fb.firebasestorage.app",
  messagingSenderId: "886285114695",
  appId: "1:886285114695:web:dc52ea4cc9225f62684062",
  measurementId: "G-8DBW6KPNFK"
};

// ✅ initialize with a unique name (avoid conflict with default app)
const appB = initializeApp(firebaseConfigB, "secondary");

export const dbB = getFirestore(appB);
export const authB = getAuth(appB);
