// import Link from 'next/link';

"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  return ( <nav className='fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center space-x-4'>
    <button onClick={() => scrollToSection("home")}>Home</button>
    <button onClick={() => scrollToSection("about")}>About</button>
    <button onClick={() => scrollToSection("projects")}>Projects</button>
    <button onClick={() => scrollToSection("contact")}>Contact</button>
  </nav>
  )
}