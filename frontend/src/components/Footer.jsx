// src/components/Footer.js
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center">
        {/* Social Media Links - Visible only on mobile */}
        <div className="flex space-x-6 md:hidden">
          <a
            href="https://github.com/devsingh1504"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dev-singh-11aa812a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Website Info - Centered text on larger screens */}
        <div className="text-center">
          <p>Developed with ❤️ for student</p>
          <p>© {new Date().getFullYear()} RankBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
