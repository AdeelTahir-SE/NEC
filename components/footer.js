import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1f4e79] text-white py-10 px-5 font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="/logo-removebg-preview.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm text-[#d2eae9] leading-6">Growth and Innovation</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Navigation</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Events", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Contact Info</h4>
          <p className="text-sm text-[#d2eae9] mb-2">NUST, H-12 ISLAMABAD</p>
          <p className="text-sm text-[#d2eae9] mb-2">nustentrepreneursclub@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="https://www.facebook.com/NEC.NUST/" target="_blank" rel="noopener noreferrer" className="text-[#d2eae9] text-2xl hover:text-[#0f8f98] transition-all transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/nustentrepreneursclub/" target="_blank" rel="noopener noreferrer" className="text-[#d2eae9] text-2xl hover:text-[#0f8f98] transition-all transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
