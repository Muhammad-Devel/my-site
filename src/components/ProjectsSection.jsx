import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Expense Tracker App",
      desc: "A web app to manage and analyze daily expenses with charts and reports.",
      img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=60",
      demo: "#",
      code: "#",
    },
    {
      title: "QR Menu System",
      desc: "A React + Node.js project that lets restaurants manage digital menus and orders via QR codes.",
      img: "https://images.unsplash.com/photo-1606813902794-0b9f7d62c03b?auto=format&fit=crop&w=800&q=60",
      demo: "#",
      code: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A fully responsive personal portfolio site with dark mode and glassmorphism design.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md 
                 rounded-2xl mx-4 my-6 shadow-lg transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Some of the work I’ve done recently using React, Tailwind, and Node.js.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-gray-900/40 rounded-xl overflow-hidden 
                         shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col space-y-3 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.desc}
                </p>
                <div className="flex space-x-4 mt-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-green-500 hover:text-green-400"
                  >
                    <ExternalLink size={18} /> <span>Live Demo</span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-400"
                  >
                    <Github size={18} /> <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
