import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../pages/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full h-[80px] z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-[80px] h-[70px] rounded-full border-2 border-blue-200"
            />
            <p className="ml-2 text-lg md:text-2xl font-bold text-blue-600 mt-2">
              RK Home & Online Tutors
            </p>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-600 font-bold">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="text-blue-600 bg-gray-100 border-blue-200"
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-100"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search-tutor"
              activeClassName="text-blue-600 bg-gray-100 border-blue-200"
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-100"
            >
              Search Tutor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join-tutor"
              activeClassName="text-blue-600 bg-gray-100 border-blue-200"
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-100"
            >
              Join as Tutor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeClassName="text-blue-600 bg-gray-100 border-blue-200"
              className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-100"
            >
              Login
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white shadow-md">
          <NavLink
            to="/"
            onClick={toggleMenu}
            activeClassName="text-blue-600 bg-gray-100 border-blue-200"
            className="text-gray-600 font-bold hover:text-blue-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/search-tutor"
            onClick={toggleMenu}
            activeClassName="text-blue-600 bg-gray-100 border-blue-200"
            className="text-gray-600 font-bold hover:text-blue-600"
          >
            Search Tutor
          </NavLink>
          <NavLink
            to="/join-tutor"
            onClick={toggleMenu}
            activeClassName="text-blue-600 bg-gray-100 border-blue-200"
            className="text-gray-600 font-bold hover:text-blue-600"
          >
            Join as Tutor
          </NavLink>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            activeClassName="text-blue-600 bg-gray-100 border-blue-200"
            className="text-gray-600 font-bold hover:text-blue-600"
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
