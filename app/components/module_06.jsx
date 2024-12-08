import React from "react";
import CreativityIcon from "../assets/Images/Frame.png"; // Replace with actual path
import ExpertsIcon from "../assets/Images/Frame2.png"; // Replace with actual path
import FutureIcon from "../assets/Images/Frame3.png"; // Replace with actual path
import IMG2 from '../assets/Images/Frame4.png'

const MainPage6 = () => {
  const features = [
    {
      title: "Think Creatively",
      description:
        "Unlock your creativity and explore unique solutions to real-world problems through our innovation-focused activities.",
      iconSrc: CreativityIcon,
    },
    {
      title: "Learn From Industry Experts",
      description:
        "Gain insights from experienced mentors and entrepreneurs, helping you build a strong foundation for your startup journey.",
      iconSrc: ExpertsIcon,
    },
    {
      title: "Build Your Future",
      description:
        "Get hands-on support to turn your ideas into impactful ventures, contributing to a better future for yourself and society.",
      iconSrc: FutureIcon,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[2rem] font-bold text-blue-800 ">
          Why Join Us?{" "}
          <img
            src={IMG2}
            alt="underline"
            className="absolute w-[10rem] h-auto ml-[32vw]"
          />
        </h2>
        <div className="w-16 h-1  mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[1.5rem]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-teal-50 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={feature.iconSrc}
                  alt={`${feature.title} Icon`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage6;
