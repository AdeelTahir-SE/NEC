import Image from "next/image";
import Link from "next/link";

export default function MainContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section flex justify-between items-center py-[80px] px-[60px] bg-[#abfff1] gap-5">
        <div className="hero-text max-w-[50%] text-left pr-[30px]">
          <h1 className="text-[2.8rem] font-bold mb-[46px] leading-[1.4] text-[#000101]">
            NUST <br /> ENTREPRENEURS <br /> CLUB
          </h1>
          <p className="text-[1.2rem] mb-[25px] text-[#333] leading-[1.5]">
            A vibrant community of innovators, dreamers, and doers ready to disrupt the status quo.
          </p>
          <Link href="#about">
            <a className="btn px-[7px] py-[6px] bg-[#0c273f] text-white rounded-[14px] font-bold transition-all hover:bg-[#155a7c]">
              See More
            </a>
          </Link>
        </div>
        <div className="hero-image-container flex justify-center items-center max-w-[100%]">
          <Image
            src="/hover_secton-removebg-preview.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about py-[60px] px-[20px] text-center" id="about">
        <h2 className="text-[2rem] font-bold mb-[52px] text-[#000101]">About Us</h2>
        <div className="about-content flex justify-center items-center gap-[20px]">
          <p className="text-[22.3px] leading-[1.5] flex-1">
            We are a leading technology company focused on delivering cutting-edge solutions to transform industries
            and businesses. Our expertise spans across various domains including Cloud Computing, AI, and Cybersecurity.
            At NEC Technologies, We strive to innovate and create impactful solutions that drive change and empower businesses
            to achieve their goals.
          </p>
          <Image
            src="/about_us-removebg-preview.png"
            alt="About Us Image"
            width={430}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events py-[60px] px-[40px] bg-[#abfff1]" id="upcoming-events">
        <h2 className="text-[2rem] font-bold text-center mb-[52px] text-[#1f4e79]">Upcoming Events</h2>
        <div className="event-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] justify-center">
          {/* Event Card */}
          <div className="event-card p-[10px] bg-[#0e577b] text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/upcoming_events3.jpg"
              alt="Event 1"
              width={300}
              height={200}
              className="rounded-lg mb-[10px] transition-transform hover:scale-[1.1]"
            />
            <p className="text-center font-semibold">Event Name 1</p>
          </div>
          <div className="event-card p-[10px] bg-[#0e577b] text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/upcoming_events4.jpg"
              alt="Event 2"
              width={300}
              height={200}
              className="rounded-lg mb-[10px] transition-transform hover:scale-[1.1]"
            />
            <p className="text-center font-semibold">Event Name 2</p>
          </div>
          <div className="event-card p-[10px] bg-[#0e577b] text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/upcoming_events.jpg"
              alt="Event 3"
              width={300}
              height={200}
              className="rounded-lg mb-[10px] transition-transform hover:scale-[1.1]"
            />
            <p className="text-center font-semibold">Event Name 3</p>
          </div>
          <div className="event-card p-[10px] bg-[#0e577b] text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Image
              src="/upcoming_events2.jpg"
              alt="Event 4"
              width={300}
              height={200}
              className="rounded-lg mb-[10px] transition-transform hover:scale-[1.1]"
            />
            <p className="text-center font-semibold">Event Name 4</p>
          </div>
        </div>
      </section>

      {/* Stay in Touch Section */}
      <section className="stay-in-touch py-[60px] px-[40px] bg-[#f9f9fa] text-center" id="stay-in-touch">
        <h3 className="text-[2rem] font-bold mb-[15px] text-[#061d3e]">Stay in Touch</h3>
        <p className="text-[1.1rem] mb-[30px] text-[#051e55] leading-[1.6]">
          We’d love to connect with you on our social platforms. Follow us for updates!
        </p>
        <div className="social-icons flex justify-center space-x-[20px] flex-wrap">
          <a
            href="#"
            className="text-[#104474] flex items-center space-x-[10px] px-[20px] py-[10px] bg-white rounded-full hover:bg-[#0f8f98] hover:text-white transition-all"
          >
            <Image src="/twitter_logo.webp" alt="Twitter Icon" width={30} height={30} />
            <span>Twitter</span>
          </a>
          <a
            href="#"
            className="text-[#104474] flex items-center space-x-[10px] px-[20px] py-[10px] bg-white rounded-full hover:bg-[#0f8f98] hover:text-white transition-all"
          >
            <Image src="/youtube_logo.jpeg" alt="YouTube Icon" width={30} height={30} />
            <span>YouTube</span>
          </a>
          <a
            href="#"
            className="text-[#104474] flex items-center space-x-[10px] px-[20px] py-[10px] bg-white rounded-full hover:bg-[#0f8f98] hover:text-white transition-all"
          >
            <Image src="/instagram_logo.webp" alt="Instagram Icon" width={30} height={30} />
            <span>Instagram</span>
          </a>
        </div>
      </section>
    </>
  );
}