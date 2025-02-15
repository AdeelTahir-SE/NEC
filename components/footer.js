import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1f4e79] text-white py-10 px-5 font-sans">
      <div className="footer-container flex flex-wrap justify-between items-start gap-8 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex-1 max-w-xs sm:max-w-[25%]">
          <img
            src="/logo-removebg-preview.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm text-[#d2eae9] leading-6">
            Growth and Innovation
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 max-w-xs sm:max-w-[25%]">
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Navigation</h4>
          <ul className="list-none p-0 space-y-2">
            <li>
              <Link href="/" className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 max-w-xs sm:max-w-[25%]">
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Contact Info</h4>
          <p className="text-sm text-[#d2eae9] mb-2">NUST, H-12 ISLAMABAD</p>
          <p className="text-sm text-[#d2eae9] mb-2">nustentrepreneursclub@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="flex-1 max-w-xs sm:max-w-[25%]">
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/NEC.NUST/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d2eae9] text-2xl hover:text-[#0f8f98] transition-all transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/nustentrepreneursclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d2eae9] text-2xl hover:text-[#0f8f98] transition-all transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
