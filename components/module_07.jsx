import React from "react";

const MainPage7 = () => {
  return (
    <footer className="bg-[#314c68] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">NEC</h2>
          <p className="mt-4 text-sm">
            Lorem Ipsum Dolor Sit Amet Go Sit Amet Consectetur Lorem Ipsum Dolor
            Sit Amet Consectetur Lorem Ipsum Dolor Sit Amet Consectetur.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span>📞 +62 859 9999 999</span>
            </li>
            <li>
              <span>✉️ hello@email.com</span>
            </li>
            <li>
              <span>
                📍 Lorem ipsum street Block B Number 08, Jakarta, Pakistan,
                12345
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SOCIAL</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f">F</i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter">T</i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram">I</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainPage7;
