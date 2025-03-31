import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>

      <h1>👋 Hi, I'm Johnny Nylund</h1>

      <p>I'm a robot process automation engineer currently working at Digia Finland Oy.</p>

      <a href="/projects">View My Work</a> | <a href="/contact">Get in Touch</a>
      
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-200">
      <h1>About</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-300">
      <h1>Projects</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
      <h1>Contact</h1>
      </section>

      <section id="testimonials" className="h-screen flex items-center justify-center bg-gray-500">
      <h1>Testimonials</h1>
      </section>
      
    </main>
  );
}