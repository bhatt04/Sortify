// import React from "react";
// import { motion } from "framer-motion";
// const Hero = () => {
//   return (
//     <div className="h-screen w-screen flex items-center justify-end pr-10 bg-gray-900">
//       <motion.div
//         initial={{ opacity: 0, y: -150 }}
//         animate={{ opacity: 1, y: -50 }}
//         transition={{ duration: 2 }}
//         className="text-right"
//         style={{ transform: "translateY(-10%)" }} // slightly above center>
//         <h1 className="text-white text-6xl font-bold mb-4">
//           SORTING VISUALIZER
//         </h1>
//         <p className="text-white text-lg">
//   Visualize various sorting algorithms in action.
//   Perfect for students and curious minds!
// </p>
//       </motion.div>
//     </div>
//   );
// };
// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingBars from "../components/FloatingBars";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#F1EFFF] flex items-center justify-end pr-48 ">
      <FloatingBars />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-right"
      >
        
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="text-[#2B3358] text-7xl font-bold mb-4 drop-shadow-lg tracking-wide"
      >
        SORTING VISUALIZER
      </motion.h1>


        <p className="text-[#2B3358] text-2xl mb-6">
          Visualize various sorting algorithms in action.<br />
          Perfect for students and curious minds!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/sort")}
          className="bg-[#5CB270] text-xl text-white px-6 py-3 mr-20 rounded-xl shadow-md hover:bg-[#A8D26D] transition "
        >
          Let's Get Sorting!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomePage;
