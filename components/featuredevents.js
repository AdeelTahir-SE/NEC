"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { getEventsbyType } from "@/db/EventsDB";
 

export default function FeaturedEvents() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {

    const events=await getEventsbyType("Upcoming Events");
    setEvents( events); 
  }

  useEffect(() => {
    fetchEvents();
  }, []); 
  return (
    <section className="p-8">
      <h1 className="font-bold text-5xl mb-8 ml-24 font-poppins text-slate-600">
        Featured Events
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div className="shadow-2xl" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
          <Image
            src={events[0]?.imageurl?events[0].imageurl:"/testingimage.svg"}
            alt="Event Image"
            width={400}  
            height={300} 
            className="rounded-l-lg flex-none" 
            style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} 
          />
        </div>
        <div className="flex-grow max-w-xl"> 
          <h2 className="text-3xl mb-4 ml-4 font-nunitosan font-bold">
            {events[0]?.title?events[0].title:"Event Title"}
          </h2>
          <p className="text-gray-700 ml-4">
            {events[0]?.desc?events[0].desc:"Brief description of the event goes here. It should be engaging and informative."}
          </p>
          <div className="flex justify-end">
            <button className="border-2 border-blue-400 rounded-3xl px-6 py-1 text-blue-600 hover:bg-blue-700 hover:text-white transition-colors">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
