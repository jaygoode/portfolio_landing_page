import About from './pages/about';  
import Home from './pages/home';  
import Projects from './pages/projects';  
import Contact from './pages/contact';  
import Testimonials from './pages/testimonials';  
 

export default function Frontpage() {
  return (
    <main>
      <section id="home" className=" h-screen flex items-center justify-center bg-gray-600">
      <Home/>
      </section>

      <section id="about" className=" h-screen flex items-center justify-center bg-gray-200">
      <About/>
      </section>

      <section id="projects" className=" h-screen flex items-center justify-center bg-gray-700">
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