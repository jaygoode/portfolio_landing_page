import Image from "next/image";
import About from './pages/about';  
import Projects from './pages/projects';  
import Contact from './pages/contact';  
import Testimonials from './pages/testimonials';  
 

export default function Home() {
  return (
    <main>
      <section>

      <h1>👋 Hi, I'm Johnny Nylund</h1>

      <p>I'm a robot process automation engineer currently working at Digia Finland Oy.</p>

      <a href="/projects">View My Work</a> | <a href="/contact">Get in Touch</a>

      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-200">
      <About/>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-300">
      <Projects/>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
      <Contact/>
      </section>

      <section id="testimonials" className="h-screen flex items-center justify-center bg-gray-500">
      <Testimonials/>
      </section>
      
    </main>
  );
}