import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="bg-gray-100 py-16">
        <div className="h-96 bg-cover bg-center relative flex items-center justify-center">
          {/* Background Image for Mobile */}
          <div
            className="absolute inset-0 bg-cover bg-center sm:hidden"
            style={{
              backgroundImage: "url('/4.png')",
            }}
          ></div>

          {/* Background Image for Desktop */}
          <div
            className="absolute inset-0 bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: "url('/3.png')",
            }}
          ></div>

          {/* Overlay */}
          <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

          {/* Hero Text */}
          <h1 className="relative text-white text-4xl font-bold text-center animate-fade-in">
            About Us
          </h1>
        </div>

        {/* Updated Our Mission Section */}
        <section className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-slide-down">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Our mission is to help students find the right college based on
            their JEE rank by providing accurate predictions. Currently, we
            match students with colleges where they have a good chance of
            admission. In the future, we'll add more colleges, courses, and
            features to make our platform even more helpful for students making
            important academic decisions.
          </p>
        </section>

        {/* Updated Team Section with Animations and Icons */}
        <section className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-slide-down">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fade-in">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="/dev.jpg"
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">Dev</h3>
              <p className="text-gray-500">Founder & FullStack</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="k.devsingh14@gmail.com"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-singh-11aa812a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  //target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fade-in">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="/aman.jpg"
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Amaan Ansari
              </h3>
              <p className="text-gray-500">Co-Founder & AI/ML</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="wwwamaanansari0@gmail.com"
                  //target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amaan-ansari-b45039244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  //target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;
