'use client';

import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Highlights() {
  return (
    <section>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfdfe] text-[#333] p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-8">
          <h1 className="text-4xl font-bold text-center text-[#1f4e79] mb-8">
            NEC HIGHLIGHTS
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightsData.map((highlight, index) => (
              <div key={index} className="bg-[#f0f4f7] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-xl font-semibold text-[#0c273f] mb-4">{highlight.title}</h2>
                <p className="text-sm text-[#666] mb-4">{highlight.description}</p>
                <a href={highlight.link} className="text-[#0f8f98] hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

const highlightsData = [
  {
    title: "Startup Pitch Night",
    description: "Watch aspiring entrepreneurs pitch their ideas to a panel of investors and industry experts.",
    link: "#"
  },
  {
    title: "Mentorship Program",
    description: "Gain valuable insights from successful entrepreneurs through our mentorship program.",
    link: "#"
  },
  {
    title: "Networking Meetups",
    description: "Connect with like-minded individuals, potential co-founders, and investors at our events.",
    link: "#"
  },
  {
    title: "Innovation Challenge",
    description: "Compete in our innovation challenge and win exciting prizes for your groundbreaking ideas.",
    link: "#"
  },
  {
    title: "Funding Opportunities",
    description: "Discover various funding opportunities available for early-stage startups and entrepreneurs.",
    link: "#"
  },
  {
    title: "Success Stories",
    description: "Be inspired by the journeys of entrepreneurs who turned their ideas into thriving businesses.",
    link: "#"
  }
];
