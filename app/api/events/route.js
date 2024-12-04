import { createEvent,getEventsbyType } from "@/app/DB/EventsDB";
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


export async function POST(request){
    const { title, desc, imageurl, type } = request.body;
    
    const event = createEvent(title, desc, imageurl, type);
    return NextResponse.json({message:"Event created successfully",status:200,event});
}