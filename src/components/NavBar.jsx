import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl items-center">
              <i className="fa-solid fa-laptop"></i> Yemi{" "}
              <i className="fa-solid fa-code"></i>
            </Link>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-2xl">
              <a
                href="https://github.com/IbrahimYemi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="mx-1 fa-brands fa-github-square"></i>
              </a>
              <a
                href="http://www.linkedin.com/in/ibrahim-sarafadeen-opeyemi95/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="mx-1 fa-brands fa-linkedin"></i>
              </a>
              <a
                href="http://twitter.com/sharafa224"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="mx-1 fa-brands fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-2xl">
              <Link
                to="/about"
                className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 text-neutral-200 rounded"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 text-neutral-200 rounded"
              >
                Projects
              </Link>
              <Link
                to="/experiences"
                className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 text-neutral-200 rounded"
              >
                Experiences
              </Link>
              <Link
                to="/getting-lost"
                className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 text-neutral-200 rounded"
              >
                Try get lost!
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className based on menu state. */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
          <Link
            to="/about"
            className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 block text-neutral-200 rounded"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 block text-neutral-200 rounded"
          >
            Projects
          </Link>
          <Link
            to="/experiences"
            className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 block text-neutral-200 rounded"
          >
            Experiences
          </Link>
          <Link
            to="/getting-lost"
            className="text-sm bg-gray-800 p-2 m-1 hover:bg-gray-600 text-neutral-200 rounded"
          >
            Try get lost!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
