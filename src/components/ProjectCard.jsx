import React from "react";

function ProjectCard({ props }) {
  return (
    <div className="bg-white relative group overflow-hidden shadow-md rounded-lg hover:shadow-lg transition">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-96 object-cover rounded-t-lg"
      />
      <div className="absolute -translate-y-4 bottom-0 left-0 right-0 bg-gray-100 bg-opacity-50 text-gray-600 p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:-translate-y-px transition duration-300">
        <h3 className="text-xl font-semibold mt-4">{props.name}</h3>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <div className="mt-4">
          {props.live && (
            <a
              href={props.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mr-4"
            >
              Live Demo
            </a>
          )}
          {props.frontend && (
            <a
              href={props.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mr-4"
            >
              Frontend Code
            </a>
          )}
          {props.backend && (
            <a
              href={props.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
