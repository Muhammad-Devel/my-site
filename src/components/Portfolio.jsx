import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Blog Platform",
    description:
      "📝 Fullstack CRUD blog app with user auth.\n  🔧 Tech stack: React, Express.js, MongoDB, JWT, Tailwindcss",
    live: "https://blog-platform-git-main-muhammad-devels-projects.vercel.app/",
    frontend: "https://github.com/Muhammad-Devel/blog-platform-client0.git",
    backend: "https://github.com/Muhammad-Devel/blog-platform-back0.git",
    image:
      "https://github.com/Muhammad-Devel/blog-platform-client0/blob/193991b9634733c79799ef79537715d2e3b2c35d/screenshots/blog-platform-screen.png",
  },
  // Add more projects as needed
  {
    name: "Project 3",
    description: "A brief description of Project 3.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Project 4",
    description: "A brief description of Project 4.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Project 5",
    description: "A brief description of Project 5.",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Project 6",
    description: "A brief description of Project 6.",
    image: "https://via.placeholder.com/300",
  },
];

function Portfolio() {
  return (
    <div className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto text-center w-full max-w-6xl flex flex-col justify-between">
        <h1 className="text-3xl font-bold">My Work's</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <ProjectCard props={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
