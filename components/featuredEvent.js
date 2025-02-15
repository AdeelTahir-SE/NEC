"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { getEventsbyType } from "@/db/EventsDB";

export default function FeaturedEvents() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const events = await getEventsbyType("Upcoming Events");
    setEvents(events);
  }

  useEffect(() => {
    fetchEvents();
  }, []); 

  return (
    <section className="p-4 md:p-8">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 text-center md:text-left text-slate-600">
        Featured Events
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {/* Event Image */}
        <div className="shadow-2xl w-full md:w-auto">
          <Image
            src={events[0]?.imageurl || "/testingimage.svg"}
            alt="Event Image"
            width={400}  
            height={300} 
            className="rounded-lg md:rounded-l-lg md:rounded-r-none w-full md:w-auto"
          />
        </div>

        {/* Event Content */}
        <div className="flex-grow max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl mb-2 md:mb-4 font-bold">
            {events[0]?.title || "Event Title"}
          </h2>
          <p className="text-gray-700">
            {events[0]?.desc || "Brief description of the event goes here. It should be engaging and informative."}
          </p>
          <div className="flex justify-center md:justify-end mt-4">
            <button className="border-2 border-blue-400 rounded-3xl px-6 py-2 text-blue-600 hover:bg-blue-700 hover:text-white transition-colors">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
