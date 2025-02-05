import React from "react";

const MainPage3 = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-none px-4 sm:px-0">
                <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
                    <img
                        src="/Images/Group_222.png"
                        alt="OUR MISSION ILLUSTRATION"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 lg:ml-8 xl:ml-12 2xl:ml-16 px-4 sm:px-8 lg:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.25rem] font-bold text-gray-800 mb-4 md:mb-5 lg:mb-6">
                    Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed md:leading-loose text-base sm:text-lg md:text-xl lg:text-[1.1rem] xl:text-[1.2rem]">
                    Our mission at the
                    <span className="text-green-500 font-semibold inline-block mt-1 sm:mt-0 mx-1">
                        NUST Entrepreneurs Society
                    </span>
                    is to foster an entrepreneurial mindset among students,
                    providing them with the tools, resources, and opportunities
                    they need to succeed. We aim to create a supportive
                    ecosystem that encourages innovation, promotes networking,
                    and helps students build valuable business skills. By
                    hosting mentorship programs, entrepreneurship challenges,
                    and collaborative events, we strive to inspire and guide the
                    entrepreneurs of tomorrow.
                </p>
            </div>
        </section>
    );
};

export default MainPage3;
