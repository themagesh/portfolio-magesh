'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (menuOpen) {
      timer = setTimeout(() => {
        setMenuOpen(false);
      }, 5000); // Close menu after 5 seconds
    }
    return () => clearTimeout(timer); // Clear timeout if user closes manually
  }, [menuOpen]);

  return (
    <>
      {/* Navbar Header */}
      <header className="w-full fixed top-0 bg-gray-900 text-white">
        {/* Logo */}
        <div className="absolute top-4 left-5">
          {/* <Link href="/">
            <Image
              src="/assets/img/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link> */}
         <Link href="/" className="text-2xl font-bold">
          Magesh Kumar
        </Link>
        </div>

        {/* Menu Icon */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            className="absolute top-4 right-5 text-2xl focus:outline-none"
          >
            <IoMdMenu />
          </button>
        )}

        {/* Close Icon inside menu */}
        {menuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-5 text-2xl focus:outline-none"
          >
            <IoMdClose />
          </button>
        )}
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Links */}
        <nav className="flex flex-col mt-20 text-lg tracking-wide">
          {[
            { href: '/', label: 'Home' },
            { href: '/#services-section', label: 'Services' },
            { href: '/#skills-section', label: 'Skills' },
            { href: '/#resume-section', label: 'Resume' },
            { href: '/#works-section', label: 'Works' },
            { href: '/#contact-section', label: 'Contact' },
            { href: '/works/', label: 'Projects' },
            { href: '/blog/', label: 'Blog' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-8 py-2 text-2xl font-bold font-jost hover:text-[#ff64ab] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="absolute bottom-5 left-0 w-full p-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/theMageshKumar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-[#ff64ab] transition-colors duration-200" />
          </a>
          <a href="https://github.com/themagesh" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-[#ff64ab] transition-colors duration-200" />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}
