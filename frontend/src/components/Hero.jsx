import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/predictor");
  };

  return (
    <section className="pt-20 pb-12 sm:pb-16 mt-4 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Worried about your college options?
              </motion.h1>
              <motion.p
                className="mt-4 text-lg text-gray-600 sm:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Enter your rank below to explore the top engineering colleges
                under IPU University. Let us guide you on the path to your
                future!
              </motion.p>
            </div>

            <motion.div
              className="mt-8 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="w-full max-w-md">
                <p className="text-gray-500 font-medium mb-2 text-center lg:text-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Start your journey by entering your rank below
                </p>

                {/* <p className="text-gray-500 font-medium mb-2 text-center lg:text-left">
                  Start your journey by entering your rank below
                </p> */}
                <motion.div
                  className="flex items-center rounded-full overflow-hidden shadow-lg bg-white border border-gray-300"
                  whileHover={{ scale: 1.02 }}
                  onClick={handleSearchClick}
                >
                  <input
                    type="text"
                    className="w-full px-6 py-3 text-gray-700 focus:outline-none rounded-l-full bg-white placeholder-gray-400 text-lg"
                    placeholder="Enter your rank..."
                    readOnly
                  />
                  <button className="px-7 py-4 bg-black text-white font-semibold hover:bg-blue-700 transition duration-300 rounded-r-full">
                    Search
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
              src="/hero.png"
              alt="Student looking ahead"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
