import React from "react";
import { motion } from "framer-motion";
import logo1 from "/BPIT.jpg";
import logo2 from "/msit.png";
import logo3 from "/gtbit.png";
import logo4 from "/adgitm.jpeg";
import logo5 from "/bvcoe.jpeg";
import logo6 from "/mait.png";
import logo7 from "/usict.webp";

function ScrollingLogos() {
  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        IPU Colleges for Engineering
      </h2>
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex" }}
      >
        {/* Loop through the logos twice for seamless scrolling */}
        {[...Array(8)].map((_, index) => (
          <React.Fragment key={index}>
            <img
              src={logo1}
              alt="College Logo 1"
              className="w-20 md:w-24 h-auto"
            />
            <img
              src={logo2}
              alt="College Logo 2"
              className="w-20 md:w-24 h-auto"
            />
            <img
              src={logo3}
              alt="College Logo 3"
              className="w-20 md:w-24 h-auto"
            />
            <img
              src={logo4}
              alt="College Logo 4"
              className="w-20 md:w-24 h-auto"
            />
            <img
              src={logo5}
              alt="College Logo 5"
              className="w-20 md:w-24 h-auto"
            />
            <img
              src={logo6}
              alt="College Logo 6"
              className="w-20 md:w-24 h-auto"
            />
            <img
              src={logo7}
              alt="College Logo 7"
              className="w-20 md:w-24 h-auto"
            />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollingLogos;
