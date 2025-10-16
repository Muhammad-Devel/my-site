import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full max-w-11/12 top-7 flex justify-between items-center z-50">
      <div
        className="container mx-auto flex items-center space-x-4 max-w-7xl w-full justify-between bg-white/10 backdrop-blur-md rounded-full border border-white/20 
                      shadow-xl px-6 md:px-10 py-2 md:py-4"
      >
        <div className="text-md md:text-3xl text-gray-700 font-bold dark:text-gray-200 ml-2">
          Mukhammad J.A
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <ul className="hidden md:flex space-x-4 text-gray-700 dark:text-gray-200 text-lg font-semibold">
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Uncomment the button below if you want to add a "Join" button */}
          {/* <button className="bg-gray-800 px-6 py-2 rounded-lg text-lg text-white hover:bg-gray-800 transition duration-300">
          Join
        </button> */}
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 dark:text-gray-200 focus:outline-none hover:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Add a button for the contact section */}
          {isOpen && (
            <ul className="md:hidden absolute w-[200px] bg-white/80 backdrop-blur-md text-gray-700 text-lg space-y-2 rounded-2xl border border-white/50 shadow-xl top-20 right-0 p-8 dark:bg-gray-800/80 dark:border-gray-700 dark:shadow-lg dark:backdrop-blur-lg dark:text-gray-200">
              <li className="transition duration-300 ease-in-out">
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="#projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
