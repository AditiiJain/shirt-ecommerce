require("dotenv").config();
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,"hi");

// const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
// const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
// const databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
// const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_FIREBASE_APP_ID;

// const firebaseConfig = {
//   apiKey,
//   authDomain,
//   databaseURL,
//   projectId,
//   storageBucket,
//   messagingSenderId,
//   appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBtuO2BM9P-dDJVF2fj1CghalOsm4ES_z0",
  authDomain: "shirt-ecommerce-3961d.firebaseapp.com",
  databaseURL: "https://shirt-ecommerce-3961d-default-rtdb.firebaseio.com",
  projectId: "shirt-ecommerce-3961d",
  storageBucket: "shirt-ecommerce-3961d.appspot.com",
  messagingSenderId: "619737108757",
  appId: "1:619737108757:web:0302cd9e70aeb4ab41191c"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
