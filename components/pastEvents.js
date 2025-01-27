"use client";
import { getEventsbyType } from "@/db/EventsDB";
import { useState, useEffect } from "react";
import PastEventsCard from "./pastEventsCard";

export default function PastEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const events = await getEventsbyType("Past Events");
      setEvents(events);
    }
    fetchEvents();
  }, []);

  return (
    <section className="px-4 md:px-8 py-8">
      <h1 className="font-bold text-3xl md:text-5xl mb-6 md:mb-8 text-center md:text-left font-poppins text-slate-600">
        Past Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((ele) => (
            <PastEventsCard
              key={ele.id}
              title={ele.title}
              desc={ele.desc}
              image={ele.imageurl}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-lg text-slate-500">
            No past events found.
          </p>
        )}
      </div>
    </section>
  );
}
