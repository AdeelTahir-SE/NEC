import React from "react";

const MainPage2 = () => {
  return (
    <section className="bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Heading with responsive positioning */}
        <div className="relative text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Empowering{" "}
            <span className="relative inline-block">
              Innovators
             <img src="/Images/Frame4.png" alt="underline"
                className="absolute -bottom-4 left-0 w-full max-w-[12rem] md:max-w-[14rem]"
              />
            </span>{" "}
            to Build the Future 
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
            The NUST Entrepreneurs Society (NEC) is a vibrant community of like-minded individuals passionate about entrepreneurship, innovation, and business development. We strive to cultivate a creative and collaborative environment where students and aspiring entrepreneurs can connect, share ideas, and build their entrepreneurial skills. Through workshops, networking events, and hands-on projects, we aim to empower the next generation of entrepreneurs to turn their ideas into successful ventures.
            </p>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <img src="/Images/WHO_WE_ARE.png" alt="WHO WE ARE ILLUSTRATION"
              className="w-full max-w-[400px] lg:max-w-none lg:w-[90%] xl:w-[85%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage2;