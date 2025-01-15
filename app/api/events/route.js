import { createEvent,getEventsbyType } from "@/db/EventsDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url); 
  const type = url.searchParams.get("type"); 

  if (!type) {
    return NextResponse.json(
      { error: "Missing 'type' query parameter" },
      { status: 400 }
    );
  }

  try {
    const events = await getEventsbyType(type);
    return NextResponse.json({ events });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Error fetching events" },
      { status: 500 }
    );
  }
}



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
