import { useState } from "react";
import { Icon } from "@iconify/react";
import Modal from "../shared/ui/Modal";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [getUrl, setGetUrl] = useState("");

  const clickHandler = (url) => {
    setGetUrl(url);
    setOpenModal(true);
  };

  const closeHandler = () => {
    setOpenModal(false);
    setGetUrl("");
  };

  const projects = [
    // 🔹 Frontend
    {
      title: "Modern Dashboard UI",
      desc: "Admin dashboard built with React and Tailwind CSS.",
      category: "Frontend",
      tech: ["React", "CSS"],
      demo: "https://admin-dashboard-mukhammadjon.vercel.app/",
      github: "https://github.com/Muhammad-Devel/admin-dashboard",
      image: "./screens/admin-dashboard-screen.png",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with glassmorphism and dark mode.",
      category: "Frontend",
      tech: ["React", "TailwindCSS"],
      demo: "https://muhammadjon-dev.vercel.app/",
      github: "https://github.com/Muhammad-Devel/my-site/",
      image: "./screens/my-site-screen.png",
    },

    // 🔹 HTML / CSS / JS
    {
      title: "Pomodoro Timer",
      desc: "A simple and effective timer built using HTML, CSS, and JS.",
      category: "HTML/CSS/JS",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://muhammad-devel.github.io/pomodoro-timer/",
      github: "https://github.com/muhammad-devel/pomodoro-timer",
      image: "./screens/pomodoro-screen.png",
    },
    {
      title: "2048 Game Clone",
      desc: "The popular 2048 game recreated in pure JavaScript.",
      category: "HTML/CSS/JS",
      tech:[],
      demo: "https://2048-clone.vercel.app",
      github: "https://github.com/muhammadjon/2048-game",
      image:
        "https://cdn.dribbble.com/users/210548/screenshots/15847374/media/5b94106b82518cf2c1c5b236358b65f0.png",
    },

    // 🔹 Backend
    {
      title: "Expense Tracker",
      desc: "React.js + Node.js + Express + MongoDB API for managing expenses securely.",
      category: "Backend",
      tech:["React", "Node.js", "Express", "MongoDB","Rechart"],
      demo: "https://https://expense-trakerv2.vercel.app/",
      github: "https://github.com/Muhammad-Devel/expense-trakerv2",
      image:
        "./screens/exp-screen.png",
    },
    {
      title: "Auth System",
      desc: "User registration, login, JWT authentication system built with Node.js.",
      category: "Backend",
      tech:[],
      demo: "https://auth-system-demo.vercel.app",
      github: "https://github.com/muhammadjon/auth-system",
      image:
        "https://cdn.dribbble.com/users/1059583/screenshots/16175152/media/332ce15f93b8b1da7b41e7ef6bb0de83.png",
    },
  ];

  const categories = ["All", "Frontend", "HTML/CSS/JS", "Backend"];
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        My Projects
      </h2>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 
              ${
                activeCategory === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white/20 dark:bg-gray-800/40 border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-white/30 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 dark:border-gray-800/40 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {proj.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs border-2 text-gray-500 dark:text-gray-200 dark:bg-gray-800 dark: border-gray-500 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => clickHandler(proj.demo)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-green-500/80 text-white hover:bg-green-600 transition"
                >
                  <Icon icon="mdi:eye" className="text-lg" /> Demo
                </button>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-gray-700/80 text-white hover:bg-gray-800 transition"
                >
                  <Icon icon="mdi:github" className="text-lg" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <Modal url={getUrl} isOpen={openModal} onClose={closeHandler} />
      )}
    </section>
  );
}
