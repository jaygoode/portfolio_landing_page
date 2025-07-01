import { Metadata } from 'next';

import Navbar from '@/components/navbar';  
import './globals.css';


export const metadata: Metadata = {
  title: "Johnny Nylund | Full-Stack Developer",
  description: "Portfolio of Johnny Nylund, a Full-Stack Developer specializing in Next.js, React, and Node.js."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Johnny Nylund",
              "url": "https://yourdomain.com",
              "image": "https://yourdomain.com/profile.jpg",
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername"
              ],
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}