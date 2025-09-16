import React from "react";

function Hero() {
  return (
    <div className="bg-gradient-to-t from-gray-300 to-netrual-500 h-screen flex items-center justify-center text-white relative shadow-lg">
      <div className="container mx-auto text-center w-full max-w-6xl flex justify-between md:flex-row ">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="font-bold text-6xl text-gray-900">
            Hi, I'm Mukhammad
          </h1>
          <h3 className="font-semibold text-4xl text-gray-700">
            MERN Stack Developer
            <span className="flex items-center space-x-4 mt-2 w-full justify-center border-b-2 border-gray-500 pb-2">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express"
                className="w-8 h-8 bg-white rounded p-1"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-8 h-8"
              />
            </span>
          </h3>
          <p className="text-lg text-gray-600 max-w-md text-left">
            I create web applications using the MERN stack. Let's build
            something amazing together!
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="#portfolio"
              className=" flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-800 hover:text-gray-300 transition duration-300"
            >
              View Portfolio
              <span className="ml-2">→</span>
            </a>
            <a
              href="#contact"
              className="flex flex-row items-center px-6 py-3 bg-gray-400 text-gray-700 rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-300"
            >
              Contact Me
              <span className="ml-2">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 36 32"
                >
                  <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 2.236l-7.071 7.071a1 1 0 01-1.414 0L4 6.236V20h16V6.236z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/113626688?v=4"
            alt="Mukhammad J.A"
            className="rounded-full w-48 h-48 mx-auto mt-8"
          />
        </div>
        <div className=""></div>
      </div>
      {/* Social Media Icons */}
      <div className="fixed right-8 bottom-8 flex flex-col space-y-4 z-50">
        <a
          href="https://github.com/mukhammadjon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://linkedin.com/in/mukhammadjon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-8 h-8 hover:scale-110 transition-transform"
          />
        </a>
        <a href="mailto:mukhammadjon@example.com">
          <svg
            className="w-8 h-8 text-gray-700 hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 2.236l-7.071 7.071a1 1 0 01-1.414 0L4 6.236V20h16V6.236z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Hero;
