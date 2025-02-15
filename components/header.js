"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "@/context/context";

export default function Header() {
    const { user, logout } = useUserContext();

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Define navigation items based on admin status
    const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_MAIL;
    const navItems = isAdmin
        ? ["home", "about", "events", "highlights", "contact", "createEvent"]
        : ["home", "about", "events", "highlights", "contact"];

    return (
        <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-white text-slate-700 shadow-md relative z-50 font-semibold">
            {/* Logo */}
            <div>
                <Image
                    src="/logo.svg"
                    alt="Next.js E-commerce"
                    width={150}
                    height={50}
                />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Image
                    src={isOpen ? "/cross.svg" : "/menu.svg"}
                    alt={isOpen ? "Close Menu" : "Open Menu"}
                    width={28}
                    height={28}
                />
            </button>

            {/* Navigation Menu */}
            <nav
                className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-50 
          ${
              isOpen
                  ? "opacity-100 flex flex-col py-4"
                  : "opacity-0 pointer-events-none hidden"
          } 
          md:opacity-100 md:pointer-events-auto md:flex md:flex-row md:static md:shadow-none md:bg-transparent md:items-center md:space-x-6`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
                    {navItems.map((item) => (
                        <li key={item} className="py-3 md:py-0">
                            <Link
                                href={
                                    item === "home"
                                        ? "/"
                                        : `/${item.replace(" ", "")}`
                                }
                                className="block px-4 py-2 md:p-0 relative text-lg tracking-wide capitalize
    transition-all duration-300 ease-in-out 
    hover:text-[#7FCB7F] hover:scale-110 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
    after:h-[2px] after:bg-gradient-to-r after:from-[#A7E8A7] after:to-[#6B9F6B]
    after:transition-all after:duration-300 after:ease-in-out
    hover:after:w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Register / User Dropdown */}
            <div className="relative hidden md:flex items-center">
                {user ? (
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="border-2 border-slate-700 rounded-full px-6 py-2 
               hover:bg-slate-700 hover:text-white transition-all flex 
               justify-center items-center text-center whitespace-nowrap"
                        >
                            {user?.name?.slice(0, 5)}...
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-hidden">
                                <button
                                    onClick={logout}
                                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        href="/register"
                        className="border-2 border-slate-700 rounded-full px-6 py-2 
               hover:bg-slate-700 hover:text-white transition-all flex 
               justify-center items-center text-center whitespace-nowrap"
                    >
                        Join Now
                    </Link>
                )}
            </div>
        </header>
    );
}
