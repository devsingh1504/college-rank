import React, { useState } from "react";
import axios from "axios";
import { FaUniversity } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";
import { MdError } from "react-icons/md";

const Predictor = () => {
  const [jeeRank, setJeeRank] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");

  // Function to validate rank input
  const handleRankChange = (e) => {
    const rank = e.target.value;
    setJeeRank(rank);

    // Validation: only accept ranks between 40,000 and a reasonable upper limit (e.g., 2,00,000)
    if (rank < 40000 || rank > 450000 || isNaN(rank)) {
      setValidationError("Please enter a valid rank");
    } else {
      setValidationError("");
    }
  };

  // Function to call the API
  const fetchColleges = async () => {
    setLoading(true);
    setError("");
    setColleges([]);
    try {
      const response = await axios.post(
        "https://college-selector-new-2.onrender.com",
        { jee_rank: parseInt(jeeRank) }
      );
      setColleges(response.data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      {/* Container */}
      <div className="w-full max-w-xl bg-white shadow-lg rounded-3xl p-8 space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold text-blue-600 text-center flex items-center justify-center space-x-2">
          <FaUniversity className="text-blue-600" />
          <span>RankBridge</span>
        </h1>

        {/* Input Field */}
        <input
          type="number"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Enter your JEE Rank"
          value={jeeRank}
          onChange={handleRankChange}
        />

        {/* Validation Error */}
        {validationError && (
          <div className="text-red-600 p-2 text-center animate-shake">
            {validationError}
          </div>
        )}

        {/* Button */}
        <button
          onClick={fetchColleges}
          disabled={!jeeRank || validationError}
          className={`w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
            (!jeeRank || validationError) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <>
              <RiLoader4Fill className="animate-spin text-xl" />
              <span>Fetching Colleges...</span>
            </>
          ) : (
            "Get Colleges"
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg flex items-center space-x-2 animate-shake">
            <MdError className="text-2xl" />
            <p>{error}</p>
          </div>
        )}

        {/* Colleges List */}
        {colleges.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center animate-slide-down">
              Available Colleges
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
                >
                  <p className="text-gray-700 font-bold">
                    <span className="text-blue-500">Branch:</span>{" "}
                    {college.branch}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">College:</span>{" "}
                    {college.college}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Cutoff Rank:</span>{" "}
                    {college.cutoff_rank}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predictor;
