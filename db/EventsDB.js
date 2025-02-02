
import { collection, addDoc, getDocs,getDoc,doc,updateDoc,arrayUnion, query, where } from "firebase/firestore"
import FB from "./connectDB"

const { db } = FB;

export async function createEvent(title, desc,imageurl,date) {
    try {
        const docRef = await addDoc(collection(db, "events"), {
            title: title,
            desc: desc,
            imageurl: imageurl,
            date: date
        });
        console.log("Event created with ID: ", docRef.id);
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
    const events = [];
    const currentDate = new Date(); // Get the current date

    // Format the current date as 'YYYY-MM-DD' for comparison
    const formattedCurrentDate = currentDate.toISOString().split('T')[0]; // e.g., '2025-01-27'
   console.log(formattedCurrentDate);
    // Build the query based on the provided type
    let eventsQuery;

    // Query all events regardless of type (we'll filter by date in the code)
    eventsQuery = query(collection(db, "events"));

    const querySnapshot = await getDocs(eventsQuery);

    querySnapshot.forEach((doc) => {
      const eventData = doc.data();
      const eventDate = eventData.date; // Assuming `date` is stored as a string like '2025-01-20'

      // Case when the date field is present
      if (eventDate) {
        const eventDateFormatted = eventDate;

        if (type === "Upcoming Events" && eventDateFormatted >= formattedCurrentDate) {
          events.push({
            id: doc.id,
            desc: eventData.desc,
            title: eventData.title,
            imageurl: eventData.imageurl,
            users: eventData.users || [],
            date: eventData.date,
          });
        }

        // For "Past Events", add events with date < current date
        if (type === "Past Events" && eventDateFormatted < formattedCurrentDate) {
          events.push({
            id: doc.id,
            desc: eventData.desc,
            title: eventData.title,
            imageurl: eventData.imageurl,
            users: eventData.users || [],
            date: eventData.date,
          });
        }
      }
    });

    console.log(events); // Log the result for debugging
    return events;
  } catch (error) {
    console.error("Error getting events:", error.message);
    return [];
  }
}
