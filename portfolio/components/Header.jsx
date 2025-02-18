'use client';
import { useState } from 'react';
import Menu from './Navbar';  // Adjust the path if necessary

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for opening/closing the menu

  return (
    <div>
      {/* Button to toggle the menu */}
      <button onClick={() => setMenuOpen(true)}>Open Menu</button>

      {/* Pass setMenuOpen as a prop to the Menu component */}
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </div>
  );
}
