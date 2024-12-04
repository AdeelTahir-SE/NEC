import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {  ref, set } from "firebase/database";
import FB from "./connectDB";
const { auth, db } = FB;

export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
     await set(ref(db, `/users/${userCredential.user.uid}`), {
      email: email,
      password: password, 
    });

    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
    }


export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
}
