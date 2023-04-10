import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//   databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL ,
//   projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_APP_FIREBASE_APP_ID,
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