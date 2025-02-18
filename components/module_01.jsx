import React from 'react'
import Header from './header'

const MainPage1 = () => {
  return (
    <div className="bg-grey">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <div className="relative">
        <img src="/Images/MainPage1BG.png" alt="Background"
          className="w-full h-96 md:h-[calc(100vh-80px)] object-cover" // Responsive height
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4"> {/* Mobile padding */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl px-4">
            Our mission is to empower students with the skills, resources, and
            network needed to turn bold ideas into thriving ventures.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainPage1