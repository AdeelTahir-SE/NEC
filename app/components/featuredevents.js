import Image from "next/image";

export default function FeaturedEvents() {
  return (
    <section className="p-8">
      <h1 className="font-bold text-5xl mb-8 ml-24 font-poppins text-slate-600">
        Featured Events
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div className="shadow-2xl" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
          <Image
            src="/testingimage.svg"
            alt="Event Image"
            width={400}  // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-l-lg flex-none" 
            style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} 
          />
        </div>
        <div className="flex-grow max-w-xl"> {/* Use flex-grow to fill space */}
          <h2 className="text-3xl mb-4 ml-4 font-nunitosan font-bold">
            Lorem Picsum
          </h2>
          <p className="text-gray-700 ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Fuga perspiciatis quod, cupiditate itaque ipsam exercitationem cum
            doloremque odio delectus dolorum ipsum officiis vitae optio, atque
            aliquid eum quidem est nisi architecto dolore, animi hic.
            Perspiciatis blanditiis magnam fuga eos nobis!
          </p>
          <div className="flex justify-end">
            <button className="border-2 border-blue-400 rounded-3xl px-6 py-1 text-blue-600 hover:bg-blue-700 hover:text-white transition-colors">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
