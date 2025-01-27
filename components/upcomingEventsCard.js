import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa'; 
import { registerForEvent, userAlreadyRegistered } from "@/db/EventsDB";
import { useUserContext } from "@/context/context";
import { useState, useEffect } from "react";

async function eventRegister(uid, eid, setRegistered) {
  console.log(uid, eid);
  if (!uid) {
    alert("Please login to register for the event");
    return;
  }

  await registerForEvent(eid, uid);
  setRegistered(true); // Update state to trigger UI re-render
}

export default function UpComingEventsCard({ id, title, desc, image, users }) {
  const { user } = useUserContext();
  const [registered, setRegistered] = useState(false);

  // Check if user is already registered when the component mounts
  useEffect(() => {
    if (user?.uid && users?.includes(user.uid)) {
      setRegistered(true);
    }
  }, [user, users]); // Re-run if user or users list changes

  return (
    <section className="p-0 border rounded-xl shadow-lg">
      <Image 
        src={image ? image : "/testingimage.svg"}
        alt="Event Image" 
        width={400} 
        height={300} 
        className="w-full min-h-[300px] " 
      />
      <section className="p-4">
        <h2 className="text-2xl font-bold mt-4 text-blue-900">
          {title || "Event Title"}
        </h2>
        <p className="text-gray-700 mt-2">
          {desc || "Brief description of the event goes here. It should be engaging and informative."}
        </p>

        <div className="flex justify-end mt-4">
          <button 
            className={`flex items-center text-white px-4 py-2 rounded transition-colors ${
              registered ? "bg-gray-500 cursor-not-allowed" : "bg-customBlue hover:bg-slate-600"
            }`}
            onClick={() => {
              if (!registered) {
                eventRegister(user?.uid, id, setRegistered);
              }
            }}
            disabled={registered}
          >
            {registered ? "Registered!" : "Register Now"} <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </section>
  );
}
