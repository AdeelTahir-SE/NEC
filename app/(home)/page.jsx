import Footer from "@/components/footer.js";
import Image from "next/image";
import Header from "@/components/header.js";
import Link from "next/link";

export default function Home() {
    return (
        <section className="font-poppins bg-[#fcfdfe] text-[#333] overflow-x-hidden">
            <Header />
            
            {/* Hero Section */}
            <section className="flex flex-col sm:flex-row items-center justify-center py-16 px-6 sm:px-12 bg-[#7ae6dd] gap-7 w-full text-center sm:text-left">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#000202]">
                        NUST <br /> ENTREPRENEURS <br /> CLUB
                    </h1>
                    <p className="text-lg sm:text-xl mt-6 leading-relaxed">
                        A vibrant community of innovators, dreamers, and doers ready to disrupt the status quo.
                    </p>
                    <div className="mt-6">
                        <Link href="/about" className="px-6 py-3 bg-[#0c273f] text-white font-bold text-lg rounded-full hover:bg-[#155a7c] transition-all shadow-lg">
                            See More
                        </Link>
                    </div>
                </div>
                <div className="max-w-xs sm:max-w-md w-full flex justify-center">
                    <Image
                        src="/hover_secton-removebg-preview.png"
                        alt="Hero Image"
                        className="rounded-xl drop-shadow-xl"
                        width={500}
                        height={500}
                    />
                </div>
            </section>

            {/* About Us */}
            <section id="about" className="text-center py-20 px-6 sm:px-12">
                <h2 className="text-4xl font-semibold mb-8">About Us</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed max-w-xl">
                        We are a leading technology company focused on delivering cutting-edge solutions to transform industries and businesses. Our expertise spans across various domains including Cloud Computing, AI, and Cybersecurity. NEC Technologies strives to innovate and create impactful solutions that drive change and empower businesses to achieve their goals.
                    </p>
                    <Image
                        src="/about_us-removebg-preview (1).png"
                        alt="About Us Image"
                        className="rounded-xl drop-shadow-xl"
                        width={400}
                        height={400}
                    />
                </div>
            </section>

            {/* Upcoming Events */}
            <section id="upcoming-events" className="py-20 text-center bg-[#abfff1] px-6 sm:px-12">
                <h2 className="text-4xl font-semibold text-[#1f4e79] mb-10">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-[#0e577b] p-6 rounded-xl shadow-xl transition-all hover:scale-105">
                            <Image
                                src={`/upcoming events${item}.jpg`}
                                alt={`Event Image ${item}`}
                                className="rounded-lg mb-4"
                                width={300}
                                height={300}
                            />
                            <p className="text-white font-semibold text-lg">Event Name {item}</p>
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




 