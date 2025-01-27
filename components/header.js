"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "@/context/context";

export default function Header() {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-3 m-0 bg-white text-slate-700 shadow-md relative z-50">
      <div>
        <Image
          src="/logo.svg"
          alt="Next.js E-commerce"
          width={150}
          height={50}
        />
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Image src="/cross.svg" alt="Close Menu" width={28} height={28} />
        ) : (
          <Image src="/menu.svg" alt="Open Menu" width={28} height={28} />
        )}
      </button>

      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "flex flex-col py-4 opacity-100" : "hidden opacity-0"
        } md:opacity-100 md:flex md:flex-row md:static md:shadow-none md:bg-transparent md:items-center md:space-x-6`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
          {["home", "about", "events", "highlights", "contact", "register","createEvent"].map(
            (item) => (
              <li key={item} className="py-3 md:py-0">
                <Link
                  href={
                    item == "home"
                      ? "/"
                      : `/${item.replace(" ", "")}`
                  }
                  className="block px-4 py-2 md:p-0 hover:underline"
                  onClick={() => setIsOpen(false)} 
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="hidden md:flex">
        <Link
          href="/register"
          className="border-2 border-slate-700 min-w-[120px] rounded-3xl px-6 py-2 
               hover:bg-slate-700 hover:text-white transition-all flex 
               justify-center items-center text-center"
        >
          {user ? `${user.name.slice(0, 5)}...` : "Join Now"}
        </Link>
      </div>
    </header>
  );
}
