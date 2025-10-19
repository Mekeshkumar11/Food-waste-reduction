import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-500 to-lime-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold tracking-wide text-white">
            FoodWaste<span className="text-yellow-300">+</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-white">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/donor"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Donor
            </Link>
            <Link
              to="/consumer"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Consumer
            </Link>
            <Link
              to="/food"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Food List
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600/90 backdrop-blur-sm">
          <Link
            to="/"
            className="block px-4 py-3 text-white hover:bg-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/donor"
            className="block px-4 py-3 text-white hover:bg-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Donor
          </Link>
          <Link
            to="/consumer"
            className="block px-4 py-3 text-white hover:bg-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Consumer
          </Link>
          <Link
            to="/food"
            className="block px-4 py-3 text-white hover:bg-green-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Food List
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
