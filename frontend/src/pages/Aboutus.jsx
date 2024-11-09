import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        {/* Hero Section with Background Image */}
        <div className="h-96 bg-cover bg-center relative flex items-center justify-center">
          {/* Background Image for Mobile */}
          <div
            className="absolute inset-0 bg-cover bg-center sm:hidden" // Only visible on mobile (small screens)
            style={{
              backgroundImage: "url('/logo.png')", // Replace with your mobile image path
            }}
          ></div>

          {/* Background Image for Desktop */}
          <div
            className="absolute inset-0 bg-cover bg-center hidden sm:block" // Visible on larger screens (sm and above)
            style={{
              backgroundImage: "url('/3.png')", // Replace with your desktop image path
            }}
          ></div>

          {/* Overlay */}
          <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

          {/* Text Content */}
          <h1 className="relative text-white text-4xl font-bold text-center">
            About Us
          </h1>
        </div>

        {/* Our Mission Section */}
        <section className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide students with easy access to study
            materials and notes. We believe in simplifying the learning process
            through technology, offering users a seamless way to access the
            information they need for academic success.
          </p>
        </section>

        {/* Team Section */}
        <section className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="/dev.jpg" // Replace with team member's photo
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">Dev</h3>
              <p className="text-gray-500">Founder & Developer</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="/girl-hero.png" // Replace with team member's photo
                alt="Team Member"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800">hania</h3>
              <p className="text-gray-500">Co-Founder & Designer</p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
