//features projects, tech stack for each, live demo and github links, screenshots, gifs

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | John Doe",
  description: "A collection of my web development projects."
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Projects",
  "itemListElement": [
    {
      "@type": "CreativeWork",
      "name": "Next.js Portfolio",
      "description": "A portfolio built with Next.js and Tailwind CSS.",
      "url": "https://yourdomain.com/projects/nextjs-portfolio",
      "creator": {
        "@type": "Person",
        "name": "John Doe"
      }
    },
    {
      "@type": "CreativeWork",
      "name": "E-Commerce App",
      "description": "A full-stack e-commerce platform built with Next.js and MongoDB.",
      "url": "https://yourdomain.com/projects/ecommerce-app",
      "creator": {
        "@type": "Person",
        "name": "John Doe"
      }
    }
  ]
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 w-[80vw]">
      
      <h1>🛠️ My Projects</h1>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>Check out my best projects below.</p>
      <p>Check out my best projects below.</p>
      <p>Check out my best projects below.</p>
      <p>Check out my best projects below.</p>
      <p>Check out my best projects below.</p>
      <p>Check out my best projects below.</p>
    </section>
  );
}