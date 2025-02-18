'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Header */}
      <header className="w-full fixed top-0 bg-gray-900 text-white">
        {/* Logo */}
        <div className="absolute top-4 left-5">
          <Link href="/">
            <Image
              src="/assets/img/logo.png" // Replace with your logo path
              alt="Logo"
              width={120} // Adjust width as needed
              height={40} // Adjust height as needed
              className="object-contain"
            />
          </Link>
        </div>

        {/* Menu Icon on the Right */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="absolute top-4 right-5 text-2xl focus:outline-none"
          >
            <IoMdMenu />
          </button>
        )}

        {/* Close Icon, visible only when menu is open */}
        {menuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-5 text-2xl focus:outline-none"
          >
            <IoMdClose />
          </button>
        )}
      </header>

      {/* Sidebar Menu - Opens from Right Side */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Links */}
        <nav className="flex flex-col space-y-0 mt-20 text-lg tracking-wide">
          <Link
            href="/"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services-section"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#skills-section"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Skills
          </Link>
          <Link
            href="/#resume-section"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Resume
          </Link>
          <Link
            href="/#works-section"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Works
          </Link>
          <Link
            href="/#contact-section"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Contact
          </Link>
          <Link
            href="/works/"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Page
          </Link>
          <Link
            href="/works/"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Works
          </Link>
          <Link
            href="/blog/"
            className="px-20 py-0 hover:text-[#ff64ab] transition-colors duration-200 text-3xl font-bold font-jost"
          >
            Blog
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="absolute bottom-5 left-0 w-full p-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/theMageshKumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-[#ff64ab] transition-colors duration-200" />
          </a>
          <a
            href="https://github.com/themagesh?tab=overview&from=2025-02-01&to=2025-02-18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="hover:text-[#ff64ab] transition-colors duration-200" />
          </a>
          {/* <a
            href="https://www.instagram.com/the_tamilselvan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="hover:text-[#ff64ab] transition-colors duration-200" />
          </a> */}
        </div>
      </div>

      {/* Overlay to Close Menu When Clicking Outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
