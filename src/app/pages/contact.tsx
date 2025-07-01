///email linkedin github, contact form, resume download

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 w-[80vw]">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        📬 Get in Touch
      </h1>
      <p className="text-lg text-gray-600 mt-2">I'd love to connect! Feel free to reach out.</p>

      {/* Contact Details */}
      <div className="mt-6 text-center">
        <p className="text-xl">
          Email: 
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline ml-1">
            your.email@example.com
          </a>
        </p>
        <div className="mt-4 flex space-x-6">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">
            GitHub
          </a>
        </div>
      </div>

      {/* Contact Form (Optional) */}
      <form className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea placeholder="Your Message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}