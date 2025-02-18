import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle'; // Assuming the component is in the same directory

export default function Header() {
  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MageshKumar
        </Link>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>
    </header>
  );
}
