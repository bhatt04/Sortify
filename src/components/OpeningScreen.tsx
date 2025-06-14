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


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingBars from "../components/FloatingBars";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#F1EFFF] overflow-hidden flex flex-col items-center justify-center text-center md:text-right md:flex-row md:justify-end px-4 md:px-12 lg:pr-48">
      <FloatingBars />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-right"
      >
        
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        className="text-[#2B3358] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-0 drop-shadow-lg tracking-wide"
      >
        SORTING VISUALIZER
      </motion.h1>

<motion.p
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="w-full max-w-[90%] mx-auto flex justify-end md:justify-end text-[#1c2c5e] text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide mb-4"
><i>
  <span> Visualize. </span>
  <span> Learn. </span>
  <span> Conquer.</span>
  </i>
</motion.p>




        <p className="text-[#2B3358] text-lg sm:text-xl md:text-2xl mb-6 mt-2">
          See your favorite algorithms in action.<br />
          Perfect for students and curious minds!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/sort")}
          className="bg-[#5CB270] text-white text-base sm:text-lg md:text-xl px-6 py-3 rounded-xl shadow-md hover:bg-[#A8D26D] transition "
        >
          Let's Get Sorting!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomePage;
