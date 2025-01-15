"use client"
import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Highlights() {
  return (
    <section>
        <Header />
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfdfe] text-[#333]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#1f4e79] mb-6">
          Highlights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#f0f4f7] rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0c273f] mb-4">Event of the Year</h2>
            <p className="text-sm text-[#666] mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, beatae expedita, animi ullam qui aliquid cumque mollitia repellat quam libero.
            </p>
            <a href="#" className="text-[#0f8f98] hover:underline">Learn More</a>
          </div>

          {/* Highlight 2 */}
          <div className="bg-[#f0f4f7] rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0c273f] mb-4">New Feature Launch</h2>
            <p className="text-sm text-[#666] mb-4">
              Check out the new features that were added to our platform. From improved UI to faster performance, we’ve made some amazing changes.
            </p>
            <a href="#" className="text-[#0f8f98] hover:underline">Learn More</a>
          </div>

          {/* Highlight 3 */}
          <div className="bg-[#f0f4f7] rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0c273f] mb-4">Exclusive Offer</h2>
            <p className="text-sm text-[#666] mb-4">
              Take advantage of our limited-time offer. Get 30% off your first order when you sign up today!
            </p>
            <a href="#" className="text-[#0f8f98] hover:underline">Learn More</a>
          </div>

          {/* Highlight 4 */}
          <div className="bg-[#f0f4f7] rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0c273f] mb-4">Customer Success Story</h2>
            <p className="text-sm text-[#666] mb-4">
              Hear from our happy customers and how our service has made their lives easier. Real-life stories that showcase our impact.
            </p>
            <a href="#" className="text-[#0f8f98] hover:underline">Learn More</a>
          </div>

          {/* Highlight 5 */}
          <div className="bg-[#f0f4f7] rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0c273f] mb-4">Upcoming Webinars</h2>
            <p className="text-sm text-[#666] mb-4">
              Join our next webinar on the latest trends in the industry. Reserve your spot today to learn from experts.
            </p>
            <a href="#" className="text-[#0f8f98] hover:underline">Learn More</a>
          </div>

          {/* Highlight 6 */}
          <div className="bg-[#f0f4f7] rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0c273f] mb-4">Community Feedback</h2>
            <p className="text-sm text-[#666] mb-4">
              We value your opinion! Participate in our community feedback survey and help us improve our services.
            </p>
            <a href="#" className="text-[#0f8f98] hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>

  );
}
