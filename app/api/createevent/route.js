import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { createEvent } from "@/db/EventsDB";

// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false, // Disable body parser for raw file upload
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData(); 

    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const image = formData.get("image");

    if (!title || !description || !date || !image) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Debug: Log the image type and file name
    console.log('File Name:', image.name);
    console.log('File MIME Type:', image.type);

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        {
          resource_type: "auto", // Automatically detect the file type
          folder: "events", // Folder to store the image
          use_filename: true,
          unique_filename: true, // Ensure the filename is unique
          options: { "dangerouslyAllowSVG": true }, // Allow SVG uploads
        },
        (error, result) => {
          if (error) {
            reject(error); // Reject the promise if there's an error
          } else {
            resolve(result); // Resolve with the result if successful
          }
        }
      ).end(buffer);
    });

    // Get the URL of the uploaded image
    const imageUrl = uploadResult.secure_url;

    // Create event in the database with the uploaded image URL
    await createEvent(title, description, imageUrl, date);

    return NextResponse.json({
      message: "Event created successfully!",
      event: { title, description, date, imageUrl },
    }, { status: 201 });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      error: error.message || "Failed to process the event creation.",
    }, { status: 500 });
  }
}
