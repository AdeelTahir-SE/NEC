import Image from "next/image";

export default function EventsHeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-slate-700 text-white">
      <div className="absolute inset-0">
        <Image 
          src="/eventherosection.png" 
          alt="Events" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 text-center bg-black bg-opacity-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Events</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl max-w-2xl">
          Our mission is to empower students with the skills, resources, and network 
          needed to turn bold ideas into thriving ventures.
        </p>
      </div>
    </section>
  );
}
