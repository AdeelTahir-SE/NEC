"use client"
import EventsCard from "./eventscard";
import { useState, useEffect } from "react";

export default function EventsCardSection({title}) {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const response = await fetch(`/api/events?type=${title}`);
    const data = await response.json();
    setEvents(data.events); 
    console.log(data)
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
        {events && events.length&&events.length>0&& events.map((ele) => (
          <EventsCard
            key={ele.id} 
            title={ele.title} 
            desc={ele.body} 
            image="/testingimage.svg" 
          />
        ))}
      </div>
    </section>
  );
}
