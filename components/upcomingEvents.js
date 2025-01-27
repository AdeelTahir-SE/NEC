"use client";
import UpComingEventsCard from "./upcomingEventsCard";
import { getEventsbyType } from "@/db/EventsDB";
import { useState, useEffect } from "react";

export default function UpComingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const events = await getEventsbyType("Upcoming Events");
      setEvents(events);
    }
    fetchEvents();
  }, []);

  return (
    <section className="px-4 md:px-8 py-8">
      <h1 className="font-bold text-3xl md:text-5xl mb-6 md:mb-8 text-center md:text-left font-poppins text-slate-600">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.map((ele) => (
            <UpComingEventsCard
              key={ele.id}
              id={ele.id}
              title={ele.title}
              desc={ele.desc}
              image={ele.imageurl}
              users={ele.users}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-lg text-slate-500">
            No upcoming events found.
          </p>
        )}
      </div>
    </section>
  );
}
