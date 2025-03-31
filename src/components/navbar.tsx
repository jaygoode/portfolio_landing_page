import Link from 'next/link';



export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }


  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
      <ul className="flex space-x-6 justify-center">
      <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
      </ul>
    </nav>
  );
}