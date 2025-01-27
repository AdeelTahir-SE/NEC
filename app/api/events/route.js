import { createEvent,getEventsbyType } from "@/db/EventsDB"
import { NextResponse } from "next/server";





export async function POST(request) {
  try {
    // Parse the incoming JSON body
    const { title, desc, imgurl, date } = await request.json();
    
    // Validate required fields
    if (!title || !desc || !date) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create event object
    const event = { title, desc, imgurl, date };
    
    // Save to database
    await createEvent(title, desc, imgurl, date);

    return NextResponse.json(
      { message: "Event created successfully", event },
      { status: 201 }  // 201 Created is more appropriate for successful resource creation
    );

  } catch (error) {
    console.error("Error:", error);
    
    // Determine if it's a parsing error or database error
    const errorMessage = error instanceof SyntaxError 
      ? "Invalid request format"
      : "Internal server error";
      
    return NextResponse.json(
      { message: errorMessage },
      { status: error instanceof SyntaxError ? 400 : 500 }
    );
  }
}
