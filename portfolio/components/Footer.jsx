import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/in/thetamilselvan/" target="_blank" rel="nofollow">
              <i className="fab fa-linkedin text-xl hover:text-blue-500"></i>
            </Link>
            <Link href="https://www.instagram.com/the_tamilselvan/" target="_blank" rel="nofollow">
              <i className="fab fa-instagram text-xl hover:text-pink-500"></i>
            </Link>
          </div>

          {/* Copyright Text */}
          <div className="text-center md:text-left">
            <p>
              &copy; {currentYear} <strong>TamilSelvan</strong>. All rights reserved.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="text-center md:text-right">
            <p>
              Developed by <strong>TamilSelvan</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
