'use client';

import Image from 'next/image';
import Link from 'next/link';
import { jost, caveat } from './Fonts'; 


export default function HeroSection() {
  return (
    <section
      className="relative  text-white py-16 px-6 overflow-hidden"
      id="started-section"
    >
      {/* Background Patterns */}
      <span
        className="absolute top-10 left-10 w-24 h-24 bg-cover bg-no-repeat opacity-50"
        // style={{ backgroundImage: 'url(/assets/images/pat-1.png)' }}
      ></span>
      <span
        className="absolute bottom-10 right-10 w-32 h-32 bg-cover bg-no-repeat opacity-50"
        // style={{ backgroundImage: 'url(/assets/images/pat-2.png)' }}
      ></span>
      <span
        className="absolute bottom-20 left-20 w-20 h-20 bg-cover bg-no-repeat opacity-50"
        // style={{ backgroundImage: 'url(/assets/images/pat-2.png)' }}
      ></span>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative">
        <div className="text-center md:text-left max-w-xl">
        <p className={`text-lg ${jost.className} text-[#ff64ab]`}>
            <span className="text-[#ffffff] font-bold "> HI!</span>
            <span className="font-bold">, <b>I'M</b></span>
        </p>

          <h1 className={`text-8xl font-bold ${jost.className} text-[#ffffff] text-shadow`}>
            <strong className="text-[#ff64ab]">Magesh</strong> <strong className="text-[#ffffff]">Kumar</strong>
          </h1>

          {/* ✅ Fixed Caveat class name usage */}
          <p className={`text-xl mt-2 ${caveat.className}`}>
            <strong className={`${jost.className}`}>A</strong> <strong>Python Developer</strong>
            </p>

          <p className="mt-4 text-gray-300">
          Passionate Python Developer with a strong focus on Linux and cloud technologies. I have hands-on experience in live environments and a deep technical knowledge of backend development and real-time systems.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/themagesh/"
              target="_blank"
              className="text-white text-2xl hover:text-[#ff64ab] transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              href="https://github.com/themagesh"
              target="_blank"
              className="text-white text-2xl hover:text-[#ff64ab] transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </Link>
          </div>

          <div className="flex items-center gap-0 mt-5">
  {/* Download CV Button */}
  <Link
    href="https://drive.google.com/file/d/1hdcvImnl6wByf4qSkmq9kdl81lHW3Lx1/view?usp=sharing"
    target="_blank"
    className="bg-transparent text-white px-6 py-1 rounded-xl font-semibold shadow-md 
               border-2 border-white hover:bg-[#ff64ab] hover:text-white"
  >
    Download CV  
  </Link>

  {/* Visible Horizontal Line */}
  <div className="w-16 border-t-2 border-white"></div>

  {/* My Skills with Space */}
  <Link href="#skills-section" className="text-[#ff64ab] font-semibold tracking-widest-2">
    My Skills
  </Link>
</div>


        </div>

        <div className="relative mt-10 md:mt-5">
          {/* <Image
            // src="/assets/img/profile2.jpg"
            // alt="MageshKUMAR Profile"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          /> */}
          <div className="relative mt-10 md:mt-5">
  <div className="w-[300px] h-[300px] bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-white text-2xl font-bold">
    
  </div>
</div>

          <div className="absolute -top-5 -left-5 bg-[#ff64ab] w-12 h-12 rounded-full"></div>
          <div className="absolute -bottom-5 -right-5 bg-gray-500 w-16 h-16 rounded-full"></div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-lg">
              <span className="font-bold text-[#ff64ab]">1+</span> Years of <strong>Experience</strong>
            </p>
            <p className="text-lg">
              <span className="font-bold text-[#ff64ab]">5</span> Completed <strong>Projects</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
