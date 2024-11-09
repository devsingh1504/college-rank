// src/components/Navbar.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/Contact" },
    { label: "About Us", href: "/Aboutus" },
    { label: "College", href: "/College" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg p-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-white">RankBridge</h1>

      {/* Links for large screens */}
      <ul className="hidden md:flex space-x-8 pr-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-200 text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger icon for mobile screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-3/4 bg-gray-800 shadow-lg z-40 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
          <ul className="space-y-4 text-center font-bold mt-10">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileTap={{ scale: 0.95 }}
                className="text-white text-2xl"
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
