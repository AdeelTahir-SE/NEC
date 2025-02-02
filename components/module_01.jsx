import React from 'react'
import BgIMG from '../assets/Images/MainPage1BG.png'
import Logo from '../assets/Images/Logo-NEC.png'

const MainPage1 = () => {
  return (
    <div className="bg-grey min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6"> {/* Responsive padding */}
          {/* Logo with responsive sizing */}
          <div className="w-24 md:w-32 lg:w-40">
            <img src={Logo} alt="Logo" className="h-full w-full object-contain" />
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="#home" className="text-gray-800 hover:text-blue-500 text-sm lg:text-[1.2rem]">
              Home
            </a>
            {/* Repeat for other links */}
            <a href="#about" className="text-gray-800 hover:text-blue-500 text-sm lg:text-[1.2rem]">
              About
            </a>
            <a href="#events" className="text-gray-800 hover:text-blue-500 text-sm lg:text-[1.2rem]">
              Events
            </a>
            <a href="#highlights" className="text-gray-800 hover:text-blue-500 text-sm lg:text-[1.2rem]">
              Highlights
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500 text-sm lg:text-[1.2rem]">
              Contact Us
            </a>
          </div>

          {/* Join Button - Responsive sizing */}
          <button className="text-black px-4 py-1.5 md:px-6 md:py-2 rounded-full border-2 border-black hover:bg-gray-100 text-sm md:text-[1.1rem]">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          src={BgIMG}
          alt="About Us Background"
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