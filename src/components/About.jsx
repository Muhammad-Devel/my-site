import React from "react";

function About() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-lg">
          Hello! I'm Muhammadjon, a passionate software developer specializing
          in building modern web applications. With a strong background in
          JavaScript and React, I enjoy creating user-friendly and efficient
          solutions. I am always eager to learn new technologies and take on
          challenging projects. Let's build something amazing together!
        </p>
        <div className="mt-6 py-6 flex flex-col items-center border-t-2 border-gray-300 slide-container">
          {/* Motion Gallery for Skills */}
          <div className="flex slide-content space-x-4 mb-8 pb-2">
            {[
              {
                name: "JavaScript",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
              },
              {
                name: "React.js",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
              },
              {
                name: "Node.js",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Express.js",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
              },
              {
                name: "MongoDB",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "HTML",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
              },
              {
                name: "CSS",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="slide flex-col items-center bg-transparent rounded-lg shadow-md px-6 py-4 min-w-[120px] transition-transform hover:scale-105"
              >
                <span className="text-3xl mb-2">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    srcset=""
                    className="w-8 h-8"
                  />
                </span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
