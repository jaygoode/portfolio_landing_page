//about page, tech journey, tech stack, casual personal touch

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 w-[80vw]">
      <h1 className="text-4xl font-bold text-gray-900">👨‍💻 About Me</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center">
        I'm <strong>Johnny Nylund</strong>, a dynamic software developer specializing in <span className="text-blue-600">robotic process automation (RPA)</span> and <span className="text-blue-600">full-stack development</span>.
        Passionate about automation, problem-solving, and delivering high-impact solutions, I thrive in both independent and collaborative environments.
      </p>

      {/* Work Experience */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">💼 Work Experience</h2>
        <ul className="mt-4 space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Software Developer & Support Manager</h3>
            <p className="text-gray-600">Digia Finland Oy (2023 - Present)</p>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Designed and deployed automation robots, generating $50K+ revenue per bot.</li>
              <li>Maintained a €500,000+ file transfer system for handling millions of records.</li>
              <li>Led client relationships, securing multiple new contracts through technical expertise.</li>
            </ul>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Platoon Leader - Finnish Defence Forces</h3>
            <p className="text-gray-600">Led a team of 30 personnel in high-stress operations.</p>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Developed leadership, teamwork, and crisis management skills.</li>
              <li>Managed logistics and inventory for field operations.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">🛠 Skills & Technologies</h2>
        <p className="text-gray-700 mt-2">
          <strong>Programming:</strong> Python, JavaScript/TypeScript, Bash  
          <br />
          <strong>Automation:</strong> Selenium, Pywinauto, PyAutoGUI, OpenPyxl, Pandas  
          <br />
          <strong>Cloud & DevOps:</strong> Docker, Microsoft Azure, Amazon Cloud  
          <br />
          <strong>Cybersecurity & Networking | Customer Support | Jira & Efecte</strong>
        </p>
      </div>

      {/* Languages */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">🌍 Languages</h2>
        <p className="text-gray-700 mt-2">
          <strong>Swedish:</strong> Native | <strong>English:</strong> Fluent | <strong>Finnish:</strong> B1+ Intermediate
        </p>
      </div>

      {/* Contact */}
      <div className="mt-8 w-full max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800">📫 Get in Touch</h2>
        <p className="text-gray-700 mt-2">
          Feel free to reach out via email or connect with me on LinkedIn & GitHub!
        </p>
        <p className="mt-4">
          <a href="mailto:johnny_nylund@hotmail.com" className="text-blue-500 hover:underline">
            johnny_nylund@hotmail.com
          </a>
        </p>
        <div className="mt-4 flex space-x-6">
          <a href="https://linkedin.com/in/yourusername" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" className="text-gray-900 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}