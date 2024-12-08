import React from 'react'
import BgIMG from '../assets/Images/MainPage1BG.png'
import Logo from '../assets/Images/Logo-NEC.png'

const MainPage1 = () => {
  return (
    <div className="bg-grey min-h-screen ">
    {/* Navbar */}
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img src={Logo} alt="Logo" className="h-20" />
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6 text-[1.2rem]">
          <a href="#home" className="text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-blue-500">
            About
          </a>
          <a href="#events" className="text-gray-800 hover:text-blue-500">
            Events
          </a>
          <a href="#highlights" className="text-gray-800 hover:text-blue-500">
            Highlights
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">
            Contact Us
          </a>
        </div>
        {/* Join Button */}
        <button className="bg-white-500 text-[1.1rem] text-black px-6 py-2 rounded-full border border-1rem border-black hover:bg-blue-600">
          Join Now
        </button>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="relative">
      <img
        src={BgIMG}
        alt="About Us Background"
        className="w-full h-[calc(100vh-80px)] object-cover "
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Our mission is to empower students with the skills, resources, and
          network needed to turn bold ideas into thriving ventures.
        </p>
      </div>
    </div>
  </div>
  )
}

export default MainPage1;