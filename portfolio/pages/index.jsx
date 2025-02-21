import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
// import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import SkillsSection from '@/components/Skills';
import Resume from '@/components/Resume';
import BlogSection from '@/components/Blog';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Header title="MageshKumar| Portfolio" description="A showcase of my work and skills." />
      <Hero />
      <About />
      <Navbar/>
      <SkillsSection/>
      <Projects />
      <Resume/>
      <BlogSection/>
      {/* <Portfolio/> */}
      <Contact />
      <Footer/>
    </div>
    
  );
}
