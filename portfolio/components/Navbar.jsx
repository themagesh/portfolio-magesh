import Link from "next/link";

export default function Menu({ setMenuOpen }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white">
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-2xl">
        ✖
      </button>
      <Link href="/">Home</Link>
      <Link href="/#services-section">Services</Link>
      <Link href="/#skills-section">Skills</Link>
      <Link href="/#resume-section">Resume</Link>
      <Link href="/#works-section">Works</Link>
      <Link href="/#contact-section">Contact</Link>
      <Link href="/works/">Works Page</Link>
      <Link href="/blog/">Blog</Link>
    </div>
  );
}
