import Footer from "@/components/footer.js";
import Image from "next/image";
import Header from "@/components/header.js";
import Link from "next/link";

export default function Home() {
  return (
    <section className="font-poppins bg-[#fcfdfe] text-[#333]">
      <Header />
      <section className="flex flex-col sm:flex-row items-center justify-between py-10 px-5 sm:px-10 bg-[#7ae6dd] gap-7 w-full">
        <div className="w-full sm:w-1/2 text-left pr-7">
          <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-10 leading-snug text-[#000202] text-center sm:text-left">
            NUST <br /> ENTREPRENEURS <br /> CLUB
          </h1>
          <p className="text-base sm:text-lg mb-6 leading-relaxed text-center sm:text-left">
            A vibrant community of innovators, dreamers, and doers ready to disrupt the status quo.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              href="/about"
              className="px-4 py-2 bg-[#0c273f] text-white font-bold rounded-lg hover:bg-[#155a7c]"
            >
              See More
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 sm:mt-0 w-full sm:w-1/2">
          <Image
            src="/hover_secton-removebg-preview.png"
            alt="Hero Image"
            className="rounded-lg w-full max-w-[500px]"
            width={600}
            height={500}
          />
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="text-center py-16 px-5 sm:px-10">
        <h2 className="text-3xl mb-12">About Us</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
          <p className="text-sm sm:text-lg leading-relaxed w-full sm:w-1/2 text-center sm:text-left">
            We are a leading technology company focused on delivering cutting-edge solutions to transform industries and businesses. Our expertise spans across various domains including Cloud Computing, AI, and Cybersecurity. At NEC Technologies, we strive to innovate and create impactful solutions that drive change and empower businesses to achieve their goals.
          </p>
          <Image
            src="/about_us-removebg-preview (1).png"
            alt="About Us Image"
            className="rounded-lg mt-5 sm:mt-0 w-full max-w-[350px]"
            width={350}
            height={350}
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        id="upcoming-events"
        className="py-16 text-center bg-[#abfff1] text-[#333] px-5 sm:px-10 w-full"
      >
        <h2 className="text-3xl mb-12 text-[#1f4e79] font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="text-center p-4 bg-[#0e577b] rounded-lg shadow-md transition-transform hover:translate-y-[-5px] hover:shadow-lg w-full max-w-[300px] mx-auto"
            >
              <Image
                src={`/upcoming events${item}.jpg`}
                alt={`Event Image ${item}`}
                className="rounded-lg mb-3 transition-transform hover:scale-110 w-full"
                width={300}
                height={300}
              />
              <p className="text-white font-semibold">Event Name {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stay in Touch */}
      <section className="py-16 text-center bg-[#f9f9fa] text-[#333] px-5 sm:px-10 w-full">
        <h3 className="text-3xl mb-4 font-bold text-[#061d3e]">Stay in Touch</h3>
        <p className="text-base sm:text-lg mb-8 text-[#051e55] leading-relaxed">
          We would love to connect with you on our social platforms. Follow us for updates!
        </p>
        <div className="flex justify-center gap-5 flex-wrap w-full">
          {["Twitter", "YouTube", "Instagram"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="flex items-center gap-2 px-5 py-2 bg-white text-[#104474] font-bold rounded-full shadow-md hover:bg-[#0f8f98] hover:text-white hover:translate-y-[-3px]"
            >
              <Image
                src={`/${platform.toLowerCase()} logo.webp`}
                alt={`${platform} Icon`}
                className="w-5 h-5 rounded-full"
                width={100}
                height={100}
              />
              {platform}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
}
