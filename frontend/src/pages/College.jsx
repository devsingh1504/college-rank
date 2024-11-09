import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const recommendedColleges = [
  {
    name: "Bhagwan Parshuram Institute of Technology",
    location: "Delhi",
    rank: 1,
    image: "/bpit-clg.webp",
    link: "https://bpitindia.ac.in",
  },
  {
    name: "Maharaja Surajmal Institute of Technology",
    location: "Mumbai",
    rank: 2,
    image: "/msit-clg.jpeg",
    link: "https://www.msit.in",
  },
  {
    name: "Guru Tegh Bahadur Institute of Technology",
    location: "Bangalore",
    rank: 3,
    image: "/GTBIT-clg.webp",
    link: "https://www.gtbit.ac.in",
  },
  {
    name: "Dr. Akhilesh Das Gupta Institute of Technology and Management",
    location: "Kolkata",
    rank: 4,
    image: "/adgitm-clg.webp",
    link: "https://adgips.ac.in",
  },
  {
    name: "Bharati Vidyapeeth's College of Engineering",
    location: "Chennai",
    rank: 5,
    image: "/BVCOE-clg.webp",
    link: "https://bvcoend.ac.in",
  },
  {
    name: "Maharaja Agrasen Institute of Technology",
    location: "Delhi",
    rank: 6,
    image: "/MAIT-clg.webp",
    link: "https://www.mait.ac.in",
  },
  {
    name: "University School of Automation and Robotics (USAR)",
    location: "Pune",
    rank: 7,
    image: "/usar-clg.jpg",
    link: "https://sites.google.com/view/ggsipuedc/home?authuser=0",
  },
  {
    name: "University School of Information, Communication and Technology",
    location: "Hyderabad",
    rank: 8,
    image: "/USICT-clg.webp",
    link: "http://www.ipu.ac.in/usict/",
  },
];

const College = () => {
  return (
    <>
      <Navbar />
      {/* Heading Section */}
      <div className="text-center mt-20 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          IPU Colleges for Engineering
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the best colleges affiliated with Guru Gobind Singh
          Indraprastha University for engineering.
        </p>
      </div>

      {/* College Cards Section */}
      <div className="p-6 grid gap-8 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recommendedColleges.map((college, index) => (
          <motion.div
            key={college.rank}
            className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {college.name}
              </h2>
              <motion.a
                href={college.link}
                //target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 px-4 py-2 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Visit College
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default College;
