import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc,collection } from "firebase/firestore";
import FB from "./connectDB";
import { auth } from "./connectDB";
const { db } = FB;
export async function registerUser(email, password) {
  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
     await addDoc(collection(db, "users"), {
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
