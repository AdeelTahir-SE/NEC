import { initializeApp,getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGbtKB_k4KX7Tafd94F1CtxamqKlXEC_0",
  authDomain: "nust-entrepreneur-club.firebaseapp.com",
  databaseURL: "https://nust-entrepreneur-club-default-rtdb.firebaseio.com",
  projectId: "nust-entrepreneur-club",
  storageBucket: "nust-entrepreneur-club.firebasestorage.app",
  messagingSenderId: "124547595304",
  appId: "1:124547595304:web:bad866b7a4e6b8741d891d",
  measurementId: "G-GS4WVHR7HN"
};

const app = !getApps().length?initializeApp(firebaseConfig):getApp();
const auth=getAuth(app)
const db=getFirestore(app);
const FB= {auth,db};
export default  FB;
export {auth};

