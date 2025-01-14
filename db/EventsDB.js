
import { collection,addDoc,getDocs,query,querySnapshot,where } from "firebase/firestore"
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


export async function getEventsbyType(type) {
  try {
  
    const events = [];

    const querySnapshot = await getDocs(query(collection(db, "events"), where("type", "==", type)));

    querySnapshot.forEach((doc) => {
      events.push({
        id: doc.id, 
        ...doc.data(), 
      });
    });

    console.log(events); 
    return events;
  } catch (error) {
    console.error("Error getting events:", error.message);
    return []; 
  }
}
