import React, { useState } from "react";
import { motion } from "framer-motion";

function RankInput({ onSubmit }) {
  const [inputRank, setInputRank] = useState("");

  const handleSubmit = () => {
    if (inputRank) onSubmit(inputRank);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <motion.input
        className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
        type="number"
        placeholder="Enter your rank"
        value={inputRank}
        onChange={(e) => setInputRank(e.target.value)}
        whileFocus={{ scale: 1.05 }}
      />
      <motion.button
        className="mt-4 w-full px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleSubmit}
        whileHover={{ scale: 1.1 }}
      >
        Submit
      </motion.button>
    </div>
  );
}

export default RankInput;
