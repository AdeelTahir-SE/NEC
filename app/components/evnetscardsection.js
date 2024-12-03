"use client"
import EventsCard from "./eventscard";
import { useState, useEffect } from "react";

export default function EventsCardSection({title}) {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setEvents(data.slice(0, 10)); 
  }

  useEffect(() => {
    fetchEvents();
  }, []); 

  return (
    <section className="p-8">
      <h1 className="font-bold text-5xl mb-8 ml-24 font-poppins text-slate-600">
       {title?title:"Upcoming Events"}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {events && events.map((ele) => (
          <EventsCard
            key={ele.id} // Use a unique identifier
            title={ele.title} // Assuming 'title' is the correct property
            desc={ele.body} // Assuming 'body' is the description
            image="/testingimage.svg" // Placeholder image path
          />
        ))}
      </div>
    </section>
  );
}
