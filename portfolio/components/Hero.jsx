'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Roboto, Jost } from 'next/font/google';

// ✅ Correct Roboto font (Removed weight 200)
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // NO 200
  subsets: ['latin'],
  display: 'swap',
});

// ✅ Correct Jost font
const jost = Jost({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6 overflow-hidden" id="started-section">
      {/* Background Patterns */}
      <span className="absolute top-10 left-10 w-24 h-24 bg-cover bg-no-repeat opacity-50" style={{ backgroundImage: "url(/assets/images/pat-1.png)" }}></span>
      <span className="absolute bottom-10 right-10 w-32 h-32 bg-cover bg-no-repeat opacity-50" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></span>
      <span className="absolute bottom-20 left-20 w-20 h-20 bg-cover bg-no-repeat opacity-50" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></span>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
        <div className="text-center md:text-left max-w-xl">
          <p className={`text-lg ${jost.className}`}>Hi!, <b>I'm</b></p>
          <h1 className={`text-5xl font-bold ${jost.className}`}>
            <span className="text-yellow-400">Tamil</span> Selvan
          </h1>
          <p className={`text-xl mt-2 ${roboto.className}`}>a <strong>DevOps Engineer</strong></p>
          <p className="mt-4 text-gray-300">
            Passionate about Linux and cloud technologies with technical experience in live environments and strong hands-on technical knowledge.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="https://www.linkedin.com/in/thetamilselvan/" target="_blank" className="text-blue-500 text-2xl">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="https://www.instagram.com/the_tamilselvan/" target="_blank" className="text-pink-500 text-2xl">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
          <div className="flex gap-4 mt-6">
            <Link href="https://drive.google.com/file/d/10275zhShBSkCkrEQCnYlZWuQJksTflw-/view?usp=sharing" target="_blank" className="bg-yellow-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-600">
              Download CV
            </Link>
            <Link href="#skills-section" className="text-yellow-400 font-semibold underline">
              My Skills
            </Link>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0">
          <Image src="/assets/img/profile2.jpg" alt="TamilSelvan Profile" width={300} height={300} className="rounded-full shadow-lg" />
          <div className="absolute -top-5 -left-5 bg-yellow-500 w-12 h-12 rounded-full"></div>
          <div className="absolute -bottom-5 -right-5 bg-gray-500 w-16 h-16 rounded-full"></div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-lg">
              <span className="font-bold text-yellow-400">1+</span> Years of <strong>Experience</strong>
            </p>
            <p className="text-lg">
              <span className="font-bold text-yellow-400">5</span> Completed <strong>Projects</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
