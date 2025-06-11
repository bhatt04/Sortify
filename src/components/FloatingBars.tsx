// import React from "react";
// import { motion } from "framer-motion";
// const generateBars = (count: number) => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i,
//     left: Math.random() * 100, // percentage
//     height: 20 + Math.random() * 60, // 20–80px
//     width: 4 + Math.random() * 6, // 4–10px
//     duration: 5 + Math.random() * 5, // 5–10s
//     delay: Math.random() * 3,
//   }));
// };
// const bars = generateBars(25); // customize number of bars
// const FloatingBars: React.FC = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden z-0">
//       {bars.map((bar) => (
//         <motion.div
//           key={bar.id}
//           initial={{ y: "100vh", opacity: 0.3 }}
//           animate={{ y: "-10vh", opacity: 0.7 }}
//           transition={{
//             duration: bar.duration,
//             repeat: Infinity,
//             repeatType: "loop",
//             delay: bar.delay,
//           }}
//           className="bg-purple-300 absolute rounded-md"
//           style={{
//             left: `${bar.left}%`,
//             width: `${bar.width}px`,
//             height: `${bar.height}px`,
//             bottom: 0,
//             opacity: 0.5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };
// export default FloatingBars;



import React from "react";
import { motion } from "framer-motion";

interface Bar {
  id: number;
  top: number;
  left: number;
  height: number;
  width: number;
  duration: number;
  delay: number;
}

const generateBars = (count: number): Bar[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,     
    left: Math.random() * 100,   
    height: 20 + Math.random() * 30,  
    width: 5 + Math.random() * 10,     
    duration: 1 + Math.random() * 2, 
    delay: Math.random() * 2,       
  }));
};

const bars = generateBars(70); 

const FloatingBars: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          initial={{ y: 0 }}
          animate={{ y: [-4, 4, -4] }} 
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: bar.delay,
            ease: "easeInOut",
          }}
          className="bg-purple-300 absolute rounded-md opacity-60"
          style={{
            top: `${bar.top}%`,
            left: `${bar.left}%`,
            width: `${bar.width}px`,
            height: `${bar.height}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBars;
