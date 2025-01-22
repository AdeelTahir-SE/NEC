"use client"
import Image from "next/image";

import Link from "next/link";
import { useUserContext } from "@/context/context";
export default function Header() {
  const {user, loading} = useUserContext();
  console.log("user",user)
  return (
    <header className="flex justify-between items-center p-3 bg-white text-slate-700 ">
      <div>
        <Image src="/logo.svg" alt="Next.js E-commerce" width={150} height={50} />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/events" className="hover:underline">Events</Link></li>
          <li><Link href="/highlights" className="hover:underline">Highlights</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
      </nav>
      <div>
        <Link href="/register" className="border-2 border-slate-700 rounded-3xl px-6 py-2 hover:bg-slate-700 hover:text-white transition-colors">
          {user?(user.name).slice(0,5)+"...":"Join Now"}
        </Link>
      </div>
    </header>
  );
}
