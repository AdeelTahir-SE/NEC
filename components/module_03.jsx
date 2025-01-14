import React from "react";
import IMG from '../assets/Images/Group 222.png'

const MainPage3 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white  rounded-lg shadow-lg p-8 md:p-12 ">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center ml-[10rem]">
        <img
          src={IMG} // Replace with the actual image path
          alt="Our Mission Illustration"
          className="w-80 md:w-96"
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-8 mr-[10rem]">
        <h2 className="text-[2rem] font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed text-[1.5rem]">
          Lorem ipsum dolor sit amet,
          <span className="text-green-500 font-semibold text-[1.5rem]">
            consectetur adipiscing elit
          </span>
          , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default MainPage3;
