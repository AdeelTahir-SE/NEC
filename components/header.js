import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-white text-slate-700 ">
      <div>
        <Image src="/logo.svg" alt="Next.js E-commerce" width={150} height={50} />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/Events" className="hover:underline">Events</Link></li>
          <li><Link href="/highlights" className="hover:underline">Highlights</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
      </nav>
      <div>
        <button className="border-2 border-slate-700 rounded-3xl px-6 py-2 hover:bg-slate-700 hover:text-white transition-colors">
          Join Now
        </button>
      </div>
    </header>
  );
}
