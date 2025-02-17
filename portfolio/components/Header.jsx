'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          TamilSelvan
        </Link>

        {/* Navigation */}
        <nav className={`md:flex space-x-6 ${menuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:flex-row md:items-center p-4 md:p-0 shadow-md md:shadow-none`}> 
          <Link href="/" className="block md:inline-block px-4 py-2 text-gray-800 dark:text-white">Home</Link>
          <Link href="#services-section" className="block md:inline-block px-4 py-2 text-gray-800 dark:text-white">Services</Link>
          <Link href="#skills-section" className="block md:inline-block px-4 py-2 text-gray-800 dark:text-white">Skills</Link>
          <Link href="#resume-section" className="block md:inline-block px-4 py-2 text-gray-800 dark:text-white">Resume</Link>
          <Link href="#works-section" className="block md:inline-block px-4 py-2 text-gray-800 dark:text-white">Works</Link>
          <Link href="#contact-section" className="block md:inline-block px-4 py-2 text-gray-800 dark:text-white">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-gray-800 dark:text-white">
            {theme === 'dark' ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>

          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/thetamilselvan/" target="_blank" className="text-gray-800 dark:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/the_tamilselvan/" target="_blank" className="text-gray-800 dark:text-white">
            <FaInstagram size={24} />
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800 dark:text-white">
            {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
