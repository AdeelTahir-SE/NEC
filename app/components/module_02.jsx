import React from "react";
import IMG from "../assets/Images/WHO WE ARE.png";
import IMG2 from "../assets/Images/Frame4.png";

const MainPage2 = () => {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container mx-auto px-6 lg:px-16 mx-[9rem] overflow-hidden">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800">
          Empowering{" "}
          <span >
            Innovators{" "}
            <img
              src={IMG2}
              alt="underline"
              className="absolute w-[10rem] h-auto ml-[32vw]"
            />
          </span>{" "}
          to Build the Future
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center mt-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-[2rem] font-bold text-gray-800">Who We Are</h3>
            <p className="mt-4 text-gray-600 text-[1.5rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={IMG}
              alt="Who We Are Illustration"
              className="w-3/4 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage2;
