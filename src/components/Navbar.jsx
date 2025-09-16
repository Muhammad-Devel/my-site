import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center space-x-4 max-w-6xl w-full justify-between">
        <div className="text-3xl text-gray-700 font-bold">Mukhammad J.A</div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4 text-gray-700 text-lg font-semibold">
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="#about" className="hover:text-black">
                About
              </a>
            </li>
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="#services" className="hover:text-black">
                Services
              </a>
            </li>
            <li className="transition duration-300 ease-in-out nav-link">
              <a href="#portfolio" className="hover:text-black">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        {/* Uncomment the button below if you want to add a "Join" button */}
        {/* <button className="bg-gray-800 px-6 py-2 rounded-lg text-lg text-white hover:bg-gray-800 transition duration-300">
          Join
        </button> */}
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
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
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-100 shadow-lg p-4 mobile-menu">
            <ul className="flex flex-col space-y-4 text-gray-700 text-lg font-semibold">
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="/" className="hover:text-black">
                  Home
                </a>
              </li>
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="#about" className="hover:text-black">
                  About
                </a>
              </li>
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="#services" className="hover:text-black">
                  Services
                </a>
              </li>
              <li className="transition duration-300 ease-in-out nav-mobile-link">
                <a href="#portfolio" className="hover:text-black">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
