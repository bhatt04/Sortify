import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatBar {
  id: number;
  top: number;
  left: number;
  height: number;
  width: number;
  duration: number;
  delay: number;
}

const generateBars = (count: number): FloatBar[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    height: 20 + Math.random() * 30,
    width: 5 + Math.random() * 5,
    duration: 1 + Math.random() * 2,
    delay: Math.random() * 2,  }));
};

const getBarCount = () => {
  if (window.innerWidth < 640) return 30;      
  if (window.innerWidth < 1024) return 50;    
  return 70; 
};


const FloatingBars: React.FC = () => {
  const [bars, setBars] = useState<FloatBar[]>([]);

  useEffect(() => {
    setBars(generateBars(getBarCount()));

    const handleResize = () => {
      setBars(generateBars(getBarCount()));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
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
