import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import FB from "./connectDB";
import { auth } from "./connectDB";

const { db } = FB;

/**
 * Register a new user
 */
export async function registerUser(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user in Firestore with UID as document ID
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid, // Store UID for reference
      name: name,
      email: email
    });

    console.log("User registered:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
}

/**
 * Log in user
 */
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
}

/**
 * Get the current authenticated user's Firestore data
 */
export async function getUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(null);
        return;
      }


      try {
        const userDocRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
          resolve(null);
          return;
        }

        resolve(userSnapshot.data());
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        resolve(null);
      }
    });
  });
}
