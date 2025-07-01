//about page, tech journey, tech stack, casual personal touch

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 w-[80vw]">
      <h1 className="text-4xl font-bold text-gray-900">👨‍💻 About Me</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center">
        I'm <strong>Johnny Nylund</strong>, a dynamic software developer specializing in <span className="text-blue-600">robotic process automation (RPA)</span> and <span className="text-blue-600">full-stack development</span>.
        Passionate about automation, problem-solving, and delivering high-impact solutions, I thrive in both independent and collaborative environments.
      </p>
    </section>
  )
}