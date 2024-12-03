import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-footerColor text-white p-20 flex">
      <section className="flex flex-col w-1/2 pr-2">
        <Image src="/logo.svg" width={120} height={40} alt="Logo"  className="filter brightness-0 invert mb-2"/>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, aut
          laboriosam? Expedita doloribus asperiores, explicabo, ipsa et
          voluptatum, delectus animi quasi excepturi est nemo quis placeat qui
          laudantium illum ipsum?
        </p>
      </section>
      <section className="flex flex-col w-1/4">
        <h1 className="text-2xl mb-2">NAVIGATION</h1>
        <div className="flex flex-col space-y-1">
          <Link href="/" className="text-sm">Home</Link>
          <Link href="/" className="text-sm">About Us</Link>
          <Link href="/" className="text-sm">Contact Us</Link>
        </div>
      </section>
      <section className="flex flex-col w-1/4">
        <h1 className="text-2xl mb-2">CONTACT INFO</h1>
        <div className="flex items-center mb-1">
          <FaPhone className="mr-1" />
          <span className="text-sm">(123) 456-7890</span>
        </div>
        <div className="flex items-center mb-1">
          <FaEnvelope className="mr-1" />
          <span className="text-sm">email@example.com</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <span className="text-sm">123 Main St, Anytown, USA</span>
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="text-2xl mb-2">SOCIAL</h1>
        <div className="flex space-x-2">
          <FaFacebook className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaTwitter className="text-xl" />
        </div>
      </section>
    </footer>
  );
}
