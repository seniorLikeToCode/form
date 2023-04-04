import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
    // apiKey: process.env.NEXT_FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSANGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyC7t4aVYJkmMi1ojYK--dq0aeFZd6_5FwM",
    authDomain: "form-ii.firebaseapp.com",
    projectId: "form-ii",
    storageBucket: "form-ii.appspot.com",
    messagingSenderId: "1045209833034",
    appId: "1:1045209833034:web:53357bff3c5af8e77b90b3",
    measurementId: "G-24KTFKP4TY"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
