import { createEvent,getEventsbyType } from "@/db/EventsDB"
import { NextResponse } from "next/server";





export async function POST(request) {
  try {
    // Parse the incoming JSON body
    const { title, desc, imgurl, type } = await request.json();
    
    console.log(title, imgurl, desc, type);

    const event = { title, desc, imgurl, type };
 await createEvent(title,desc,imgurl,type);
    return NextResponse.json({
      message: "Event created successfully",
      status: 200,
      event
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error parsing request body",
      status: 500
    });
  }
}
