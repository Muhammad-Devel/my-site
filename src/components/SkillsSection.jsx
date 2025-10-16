import { Code2, Server, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: "Frontend Development",
      desc: "Creating modern, responsive interfaces with React.js, Tailwind CSS, and JavaScript.",
    },
    {
      icon: <Server size={40} />,
      title: "Backend Development",
      desc: "Building scalable REST APIs using Node.js and Express.js with authentication and logic handling.",
    },
    {
      icon: <Database size={40} />,
      title: "Database Management",
      desc: "Designing and managing NoSQL databases like MongoDB for efficient data storage and queries.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Tools & Version Control",
      desc: "Using Git, GitHub, and deployment tools like Vercel & Render for smooth development workflow.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md 
                 rounded-2xl mx-4 my-6 shadow-lg transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Technologies and tools I use to build complete, efficient, and scalable web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/40 dark:bg-gray-900/40 
                         p-6 rounded-xl hover:scale-105 hover:shadow-xl 
                         transition-transform duration-300 border border-white/20 dark:border-gray-700/30"
            >
              <div className="text-green-500 mb-3">{skill.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
