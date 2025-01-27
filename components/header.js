"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "@/context/context";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-3 bg-white text-slate-700 shadow-md relative">
      <div>
        <Image src="/logo.svg" alt="Next.js E-commerce" width={150} height={50} />
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex ${
          isOpen ? "block" : "hidden"
        } md:flex-row md:items-center md:space-x-6`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
          {["Home", "About", "Events", "Highlights", "Contact Us"].map((item) => (
            <li key={item} className="py-3 md:py-0">
              <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:block">
        <Link
          href="/register"
          className="border-2 border-slate-700 rounded-3xl px-6 py-2 hover:bg-slate-700 hover:text-white transition-colors"
        >
          {user ? `${user.name.slice(0, 5)}...` : "Join Now"}
        </Link>
      </div>
    </header>
  );
}
