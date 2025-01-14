import Image from "next/image";

export default function EventsHeroSection() {
  return (
    <section className="relative bg-slate-700 text-white">
      <Image src="/eventherosection.png" alt="Events" width={1920} height={1080} />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-center text-4xl">Events</h1>
        <p className="text-center mt-2">
          Our mission is to empower students with the skills, resources, and network needed to turn bold ideas into thriving ventures.
        </p>
      </div>
    </section>
  );
}
