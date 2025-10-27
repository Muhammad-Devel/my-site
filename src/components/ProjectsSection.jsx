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
      demo: "https://admin-dashboard-mukhammadjon.vercel.app/",
      github: "https://github.com/Muhammad-Devel/admin-dashboard",
      image:
        "https://raw.githubusercontent.com/Muhammad-Devel/my-site/src/assets/screens/admin-dashboard-screen.png",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with glassmorphism and dark mode.",
      category: "Frontend",
      demo: "https://muhammadjon-dev.vercel.app/",
      github: "https://github.com/Muhammad-Devel/my-site/",
      image:
        "https://raw.githubusercontent.com/Muhammad-Devel/my-site/src/assets/screens/my-site-screen.png",
    },

    // 🔹 HTML / CSS / JS
    {
      title: "Pomodoro Timer",
      desc: "A simple and effective timer built using HTML, CSS, and JS.",
      category: "HTML/CSS/JS",
      demo: "https://pomodoro-timer.vercel.app",
      github: "https://github.com/muhammadjon/pomodoro-timer",
      image:
        "https://cdn.dribbble.com/users/1554526/screenshots/15065312/media/3b8c038c6e9b88de67b62e6637ed2a59.png",
    },
    {
      title: "2048 Game Clone",
      desc: "The popular 2048 game recreated in pure JavaScript.",
      category: "HTML/CSS/JS",
      demo: "https://2048-clone.vercel.app",
      github: "https://github.com/muhammadjon/2048-game",
      image:
        "https://cdn.dribbble.com/users/210548/screenshots/15847374/media/5b94106b82518cf2c1c5b236358b65f0.png",
    },

    // 🔹 Backend
    {
      title: "REST API for Expense Tracker",
      desc: "Node.js + Express + MongoDB API for managing expenses securely.",
      category: "Backend",
      demo: "https://expense-api-demo.vercel.app",
      github: "https://github.com/muhammadjon/expense-tracker-api",
      image:
        "https://cdn.dribbble.com/users/32512/screenshots/15631333/media/5e9b78f59f621a5e7f12192b28df03d7.png",
    },
    {
      title: "Auth System",
      desc: "User registration, login, JWT authentication system built with Node.js.",
      category: "Backend",
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
      {openModal && <Modal url={getUrl} isOpen={openModal} onClose={closeHandler} />}
    </section>
  );
}
