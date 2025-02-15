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
                        A vibrant community of innovators, dreamers, and doers
                        ready to disrupt the status quo.
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
                        We are a leading technology company focused on
                        delivering cutting-edge solutions to transform
                        industries and businesses. Our expertise spans across
                        various domains including Cloud Computing, AI, and
                        Cybersecurity. At NEC Technologies, we strive to
                        innovate and create impactful solutions that drive
                        change and empower businesses to achieve their goals.
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
                <h2 className="text-3xl mb-12 text-[#1f4e79] font-bold">
                    Upcoming Events
                </h2>
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
                            <p className="text-white font-semibold">
                                Event Name {item}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

           {/* Stay in Touch */}
<section className="py-16 text-center bg-[#f9f9fa] text-[#333] px-5 sm:px-10 w-full">
    <h3 className="text-3xl mb-4 font-bold text-[#061d3e]">
        Stay in Touch
    </h3>
    <p className="text-base sm:text-lg mb-8 text-[#051e55] leading-relaxed">
        We would love to connect with you on our social platforms.
        Follow us for updates!
    </p>
    <div className="flex justify-center gap-5 flex-wrap w-full">
        {[
            {
                name: "Facebook",
                url: "https://www.facebook.com/NEC.NUST/",
                svg: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12.073C22 6.528 17.522 2 12 2S2 6.528 2 12.073C2 17.053 5.656 21.186 10.438 22V14.89H7.897v-2.817h2.541V9.796c0-2.506 1.492-3.892 3.774-3.892 1.095 0 2.24.195 2.24.195v2.46h-1.262c-1.243 0-1.63.775-1.63 1.57v1.854h2.773l-.443 2.817h-2.33V22C18.344 21.186 22 17.053 22 12.073Z"/>
                    </svg>
                ),
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/nust-entrepreneurs-club/",
                svg: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5c0 1.104-.89 2-1.99 2C1.89 5.5 1 4.604 1 3.5 1 2.39 1.89 1.5 2.99 1.5c1.1 0 1.99.89 1.99 2ZM1 21h3.94V7H1v14Zm6.13-14v14H11V13.5c0-1.98.51-3.5 2.99-3.5 2.48 0 2.5 2.2 2.5 3.62V21H21V12.5c0-4.15-2.22-6-5.17-6-2.56 0-3.57 1.38-4.2 2.4V7H7.13Z"/>
                    </svg>
                ),
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/nustentrepreneursclub/",
                svg: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 2C4.238 2 2 4.238 2 7v10c0 2.762 2.238 5 5 5h10c2.762 0 5-2.238 5-5V7c0-2.762-2.238-5-5-5H7Zm10 18H7c-1.657 0-3-1.343-3-3V7c0-1.657 1.343-3 3-3h10c1.657 0 3 1.343 3 3v10c0 1.657-1.343 3-3 3ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.5-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                    </svg>
                ),
            },
        ].map((platform) => (
            <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-white text-[#104474] font-bold rounded-full shadow-md hover:bg-[#0f8f98] hover:text-white hover:translate-y-[-3px] transition-all"
            >
                {platform.svg}
                {platform.name}
            </a>
        ))}
    </div>
</section>


            <Footer />
        </section>
    );
}
