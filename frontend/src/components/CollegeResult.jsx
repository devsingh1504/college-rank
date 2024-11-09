import React from "react";
import { motion } from "framer-motion";

function CollegeResult({ college }) {
  return (
    <motion.div
      className="p-4 bg-white rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800">{college.name}</h2>
      <p className="text-gray-600">{college.location}</p>
      <p className="text-blue-500 font-bold">Rank: {college.rank}</p>
    </motion.div>
  );
}

export default CollegeResult;
