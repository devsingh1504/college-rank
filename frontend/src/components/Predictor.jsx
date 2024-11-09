import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Predictor = () => {
  const { register, handleSubmit, reset } = useForm();
  const [collegeData, setCollegeData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { rank } = data;
    setLoading(true);
    setCollegeData(null);

    try {
      // Make request to your backend
      const response = await axios.post("http://localhost:3000", { rank });
      setCollegeData(response.data);
      toast.success("Data fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch data. Please try again.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100 min-h-screen">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        College Predictor
      </h1>

      {/* Form for rank input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Enter your rank</span>
          <input
            type="number"
            {...register("rank", { required: true })}
            className="mt-2 w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your rank"
          />
        </label>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Submit"}
        </button>
      </form>

      {/* Display fetched data */}
      {collegeData && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Recommended Colleges
          </h2>
          {collegeData.map((college, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700">
                <strong>{college.name}</strong>
              </p>
              <p className="text-gray-500">{college.location}</p>
              <p className="text-gray-500">Rank: {college.rank}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Predictor;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import RankInput from "./RankInput";

// function Predictor() {
//   const [rank, setRank] = useState("");
//   const [colleges, setColleges] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleRankSubmit = (userRank) => {
//     setRank(userRank);
//     // Mock data for top 8 colleges based on rank
//     const recommendedColleges = [
//       {
//         name: "Bhagwan Parshuram Institute of Technology",
//         location: "Delhi",
//         rank: 1,
//         image: "/bpit-clg.webp",
//         link: "/college1",
//       },
//       {
//         name: "Maharaja Surajmal Institute of Technology",
//         location: "Mumbai",
//         rank: 2,
//         image: "/msit-clg.jpeg",
//         link: "/college2",
//       },
//       {
//         name: "Guru Tegh Bahadur Institute of Technology",
//         location: "Bangalore",
//         rank: 3,
//         image: "/GTBIT-clg.webp",
//         link: "/college3",
//       },
//       {
//         name: "Dr. Akhilesh Das Gupta Institute of Technology and Management",
//         location: "Kolkata",
//         rank: 4,
//         image: "/adgitm-clg.webp",
//         link: "/college4",
//       },
//       {
//         name: "Bharati Vidyapeeth's College of Engineering",
//         location: "Chennai",
//         rank: 5,
//         image: "/BVCOE-clg.webp",
//         link: "/college5",
//       },
//       {
//         name: "Maharaja Agrasen Institute of Technology",
//         location: "Delhi",
//         rank: 6,
//         image: "/MAIT-clg.webp",
//         link: "/college6",
//       },
//       {
//         name: "University School of Automation and Robotics (USAR)",
//         location: "Pune",
//         rank: 7,
//         image: "/usar-clg.jpg",
//         link: "/college7",
//       },
//       {
//         name: "University School of Information, Communication and Technology",
//         location: "Hyderabad",
//         rank: 8,
//         image: "/USICT-clg.webp",
//         link: "/college8",
//       },
//     ];
//     setColleges(recommendedColleges);
//   };

//   const handleSearch = () => {
//     // Implement search functionality here
//     // For simplicity, let's filter colleges based on the name
//     const filteredColleges = colleges.filter((college) =>
//       college.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setColleges(filteredColleges);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center relative">
//       <img
//         src="/HaniaAamir.jpg" // Replace with your background image path
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover opacity-50 z-[-1]"
//       />
//       <div className="w-full max-w-md mx-auto p-4 relative z-10">
//         <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
//           College Predictor
//         </h1>
//         <p className="text-lg text-gray-600 text-center mb-4">
//           "Your future starts here. Discover the best colleges for you!"
//         </p>
//         <div className="flex flex-col items-center">
//           <div className="flex w-full mb-4">
//             {/* <input
//               type="text"
//               placeholder="Search Colleges..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-grow p-3 border border-gray-300 rounded-l-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition duration-300"
//             >
//               Search
//             </button> */}
//           </div>
//           <RankInput onSubmit={handleRankSubmit} />
//         </div>
//         <motion.div
//           className="w-full mt-6 flex flex-col items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {colleges.length > 0 && (
//             <div className="w-full flex flex-col items-center">
//               {colleges.map((college, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center mb-6 w-full max-w-xs transition-transform transform hover:scale-105"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <img
//                     src={college.image}
//                     alt={college.name}
//                     className="w-full h-40 object-cover rounded-lg mb-4"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
//                     {college.name}
//                   </h3>
//                   <p className="text-gray-600 mb-2">{college.location}</p>
//                   <a
//                     href={college.link}
//                     className="mt-2 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//                   >
//                     View More
//                   </a>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Predictor;
