import { initializeApp,getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGbtKB_k4KX7Tafd94F1CtxamqKlXEC_0",
  authDomain: process.env.Next_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_APP_FIREBASE_DATABASE_URL, 
  projectId: process.env.Next_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.Next_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.Next_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.Next_APP_FIREBASE_APP_ID,
  measurementId: process.env.Next_APP_FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length?initializeApp(firebaseConfig):getApp();
const auth=getAuth(app)
const db=getFirestore(app);
const FB= {auth,db};
export default  FB;
export {auth};

