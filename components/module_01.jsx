import React from 'react'
import BgIMG from '../assets/Images/MainPage1BG.png'
import Header from './header'
const MainPage1 = () => {
  return (
    <div className="bg-grey min-h-screen ">
  <Header/>

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