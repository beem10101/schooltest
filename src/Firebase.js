import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
// import  firebase  from "firebase/compat/app";
// import 'firebase/compat/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

// export const db = firebaseConfig.firestore();
export const db = getFirestore(firebaseConfig)
export const storageref = getStorage(firebaseConfig);
