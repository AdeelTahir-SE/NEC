import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-white py-4 shadow-md">
      <div className="navbar-container flex justify-between items-center px-6 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="logo-container">
          <Image
            src="/logo-removebg-preview.png"
            alt="NEC Logo"
            className="nec-logo"
            width={100}
            height={100}
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            </li>
            <li>
              <Link href="/event" className="text-gray-700 hover:text-blue-600">Events</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden flex items-center">
          {/* Checkbox to toggle mobile menu */}
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Menu (toggle visibility when checkbox is checked) */}
      <div className="md:hidden">
        <div className="mobile-menu">
          <label htmlFor="menu-toggle" className="close-btn absolute top-4 right-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link href="#events" className="text-gray-700 hover:text-blue-600">Events</Link>
            <Link href="#contact-us" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
