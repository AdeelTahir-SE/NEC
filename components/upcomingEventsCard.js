import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa'; 
import { registerForEvent } from "@/db/EventsDB";
import { useUserContext } from "@/context/context";

async function eventRegister(uid,eid){
  await registerForEvent(eid,uid)

}
export default function UpComingEventsCard({id,title, desc, image,isRegistered}) {
  const { user } = useUserContext();
  return (
    <section className="p-0 border rounded-xl  shadow-lg">
      <Image 
        src={image ? image : "/testingimage.svg"}
        alt="Event Image" 
        width={400} 
        height={300} 
        className="w-full" 
      />
      <section className="p-4 ">
      <h2 className="text-2xl font-bold mt-4 text-blue-900">{title ? title : "Event Title"}</h2>
      <p className="text-gray-700 mt-2">
        {desc ? desc : "Brief description of the event goes here. It should be engaging and informative."}
      </p>
      
      <div className="flex justify-end mt-4">
        
          <button className="flex items-center  text-white px-4 py-2 bg-customBlue rounded hover:bg-slate-600 transition-colors" onClick={()=>{
            if(!isRegistered)
             eventRegister(user.uid,id);
            isRegistered=true;
          }}>
            {isRegistered?"Registered!":"Register Now"} <FaArrowRight className="ml-2" />
          </button>
      </div>
      </section>
    </section>
  );
}
