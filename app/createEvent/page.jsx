"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !date || !image) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true); // Set loading to true when starting the submission process

      // Prepare form data
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", date);
      formData.append("image", image);

      const response = await fetch("/api/createevent", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const data = await response.json();
      setSuccess(data.message); // Assuming your API returns a success message
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("An error occurred while creating the event.");
      setSuccess(""); // Clear success message if there's an error
    } finally {
      setLoading(false); // Set loading to false after the submission is complete
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <section>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-[#fcfdfe] text-[#333]">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
          <h1 className="text-2xl font-bold text-center text-[#1f4e79] mb-6">
            Create Event
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#333] mb-1">
                Event Title
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#333] mb-1">
                Event Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#333] mb-1">
                Description
              </label>
              <textarea
                placeholder="Enter event description"
                className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#333] mb-1">
                Event Image (png,jpg supported)
              </label>
              <input
                type="file"
                className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
                onChange={handleImageChange}
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Success Message */}
            {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

            {/* Loading Spinner */}
            {loading && (
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0c273f] text-white font-semibold py-2 rounded-md hover:bg-[#155a7c] transition duration-300"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Creating..." : "Create Event"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
