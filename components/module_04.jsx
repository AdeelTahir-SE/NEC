import React from "react";

const MainPage4 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white gap-6 md:gap-8 lg:gap-12 xl:gap-16 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 max-w-3xl lg:max-w-none mx-auto lg:mx-0 px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.5rem] font-bold text-blue-800 mb-4 md:mb-6">
          Our Vision
        </h2>
        <p className="text-gray-600 leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl lg:text-[1.1rem] xl:text-[1.2rem]">
        Our vision is to become a leading platform for nurturing entrepreneurship within the NUST community, empowering students to become successful business leaders and innovators. We aim to create a culture of creativity and problem-solving, where members can turn their entrepreneurial dreams into reality. With a focus on sustainable business practices and social impact, we hope to contribute positively to the entrepreneurial landscape in Pakistan and beyond.
        </p>
      </div>

      {/* Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center px-4 sm:px-0">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* Background Shape */}
          <div className="absolute inset-0 bg-teal-100 rounded-full transform -translate-x-4 md:-translate-x-8 lg:-translate-x-12 -z-10" />

          {/* Illustration */}
          <div className="flex items-center justify-center p-4 sm:p-6 md:p-8">
            <img src="/Images/Group_333.png" alt="VISION ILLUSTRATION"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage4;