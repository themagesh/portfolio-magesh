import Link from "next/link";
import { jost, caveat } from './Fonts'; 

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/in/themagesh/" target="_blank" rel="nofollow">
              <i className="fab fa-linkedin text-xl hover:text-blue-500"></i>
            </Link>
            <Link href="https://github.com/themagesh" target="_blank" rel="nofollow">
              <i className="fab fa-github text-xl hover:text-pink-500"></i>
            </Link>
          </div>

          {/* Copyright Text */}
          <div className="text-center md:text-left">
            <p>
              &copy; {currentYear} <strong className="text-[#ff64ab]">Magesh</strong> <strong className="text-[#ffffff]">Kumar</strong>. All rights reserved.
            </p>
          </div>
          {/* Developer Credit */}
          <div className="text-center md:text-right">
            <p>
              Developed by <strong className="text-[#ff64ab]">Magesh</strong> <strong className="text-[#ffffff]">Kumar</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
