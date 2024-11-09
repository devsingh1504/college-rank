import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaMobileAlt, FaUserCheck } from "react-icons/fa";

function Feature() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Get the RankBridge Advantage
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your gateway to the best colleges tailored to your rank
          </p>
        </div>

        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-y-10 gap-x-8">
          {/* Left Section */}
          <div className="space-y-10 lg:col-span-2">
            <motion.div
              className="flex items-start p-4 bg-gray-50 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaUniversity className="text-blue-600 w-10 h-10 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Automated College Prediction
                </h3>
                <p className="mt-2 text-gray-600">
                  Get precise college predictions based on your rank to guide
                  your choices.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start p-4 bg-gray-50 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaMobileAlt className="text-green-500 w-10 h-10 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Responsive & Engaging Design
                </h3>
                <p className="mt-2 text-gray-600">
                  Enjoy a seamless and intuitive design that adapts perfectly to
                  all devices.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start p-4 bg-gray-50 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <FaUserCheck className="text-red-500 w-10 h-10 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Simple User Interaction
                </h3>
                <p className="mt-2 text-gray-600">
                  Effortlessly input your rank for instant college predictions
                  tailored to you.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="w-full"
              src="/RankBridge.gif"
              alt="Dashboard Display"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
