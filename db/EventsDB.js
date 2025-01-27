
import { collection, addDoc, getDocs,doc,updateDoc,arrayUnion, query, where } from "firebase/firestore"
import FB from "./connectDB"
const { db } = FB;

export async function createEvent(title, desc,imageurl,type) {
    try {
        const docRef = await addDoc(collection(db, "events"), {
            title: title,
            desc: desc,
            imageurl: imageurl,
            type: type,
        });
        return docRef;
}
catch(error){
    console.error("Error creating event:", error.message);
  }
}


export async function registerForEvent(eventId, userId) {
  try {
    const eventRef = doc(db, "events", eventId); // Use doc() instead of db.collection()
    await updateDoc(eventRef, {
      users: arrayUnion(userId) // Correct way to update an array in Firestore
    });
    console.log(`User ${userId} added to event ${eventId}`);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

export async function userAlreadyRegistered(eventId, userId) {
  try {
    const eventRef = doc(db, "events", eventId); // Use doc() instead of db.collection()
    const eventSnap = await getDoc(eventRef); // Use getDoc() instead of .get()

    if (!eventSnap.exists()) {
      console.log("No such event exists!");
      return false;
    }

    const users = eventSnap.data().users || []; // Get the 'users' array safely
    return users.includes(userId);
  } catch (error) {
    console.error("Error checking if user is registered:", error);
    return false;
  }
}
export async function getEventsbyType(type) {
  try {

    console.log(type)
    const events = [];

    const querySnapshot = await getDocs(query(collection(db, "events"), where("type", "==", type)));

    querySnapshot.forEach((doc) => {
      events.push({
        id: doc.id,
        desc:doc.data().desc,
        title:doc.data().title,
        imageurl:doc.data().imageurl,
        users: doc.data().users || [] 
      });
    });

    console.log(events);
    return events;
  } catch (error) {
    console.error("Error getting events:", error.message);
    return [];
  }
}
