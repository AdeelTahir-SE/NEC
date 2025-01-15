"use client"
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    try {
      setSuccess("Your message has been sent successfully!");
      setError('');
    } catch (err) {
      setError("An error occurred while sending your message.");
    }
  };

  return (
    <section>
      <Header />
    <div className="min-h-screen flex items-center justify-center bg-[#fcfdfe] text-[#333]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h1 className="text-2xl font-bold text-center text-[#1f4e79] mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#333] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-[#d2eae9] rounded-md focus:ring-2 focus:ring-[#0f8f98] focus:outline-none"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0c273f] text-white font-semibold py-2 rounded-md hover:bg-[#155a7c] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </section>
  );
}
