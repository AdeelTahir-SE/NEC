import React from "react";
import IMG from '../assets/Images/Group 333.png'

const MainPage4 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white">
      {/* Text Content */}
      <div className="md:w-1/2 mx-[10rem]">
        <h2 className="text-[2rem] font-bold text-blue-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed text-[1.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Illustration */}
      <div className="md:w-1/2 flex justify-center mx-[10rem]">
        <div className="relative w-full max-w-sm">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-teal-100 rounded-full -z-10"></div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <img
              src={IMG}
              alt="Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage4;
