// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   bubbleSort,
//   insertionSort,
//   selectionSort,
//   quickSort,
//   heapSort,
//   mergeSort,
// } from "../utils/sortingAlgorithms";
// import AlgorithmSidebar from "../components/AlgorithmSidebar";
// import type { AlgorithmKey } from "../components/AlgorithmSidebar";

// const SortingVisualizer: React.FC = () => {
//   const [array, setArray] = useState<number[]>([]);
//   const [arraySize, setArraySize] = useState<number>(30);
//   const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
//   const [isSorting, setIsSorting] = useState<boolean>(false);
//   const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmKey>("Bubble Sort");
//   const [showSidebar, setShowSidebar] = useState<boolean>(true);
//   const [speedLevel, setSpeedLevel] = useState(5); 
//    const [isPaused, setIsPaused] = useState(false);

//   const delay = 200 - speedLevel * 20;
//   const isPausedRef = useRef(false);

//   const togglePause = () => {
//     setIsPaused((prev) => {
//       isPausedRef.current = !prev;
//       return !prev;
//     });
//   };

//   const generateArray = () => {
//     if (isSorting) return;
//     const newArray = Array.from({ length: arraySize }, () =>
//       Math.floor(Math.random() * 100) + 5
//     );
//     setArray(newArray);
//   };

//   useEffect(() => {
//     generateArray();
//   }, [arraySize]);

//   const handleSort = async () => {
//     if (isSorting) return;

//     const sortFunction = {
//       "Bubble Sort": bubbleSort,
//       "Insertion Sort": insertionSort,
//       "Selection Sort": selectionSort,
//       "Quick Sort": quickSort,
//       "Heap Sort": heapSort,
//       "Merge Sort": mergeSort,
//     }[selectedAlgorithm];

//     if (!sortFunction) {
//       alert("Selected algorithm not implemented.");
//       return;
//     }

//     const animations = sortFunction([...array]);
//     let arr = [...array];
//     setIsSorting(true);
//     setIsPaused(false);
//     isPausedRef.current = false;

//     for (let i = 0; i < animations.length; i++) {
//     while (isPausedRef.current) {
//       await new Promise((resolve) => setTimeout(resolve, 100));
//     }

//     const { type, indices } = animations[i];
//     const [a, b] = indices;
//     setHighlightedIndices([a, b]);

//     if (type === "swap") {
//       [arr[a], arr[b]] = [arr[b], arr[a]];
//       setArray([...arr]);
//     }
//     await new Promise((resolve) => setTimeout(resolve, delay));
//   }
//   setHighlightedIndices([]);
//   setIsSorting(false);
//   };

//   return (
//       <motion.div
//        initial={{ opacity: 0, y: 30 }}
//        animate={{ opacity: 1, y: 0 }}
//        exit={{ opacity: 0, y: -20 }}
//        transition={{ duration: 0.6 }}
//        className="min-h-screen bg-[#F2EFFE]"
//       >
//         <div className="relative w-screen h-screen overflow-hidden bg-[#F6E9FF]">
//         {/* Sidebar with animation */}
//         <AlgorithmSidebar
//           algorithm={selectedAlgorithm}
//           show={showSidebar}
//           onClose={() => setShowSidebar(false)}
//         />

//             {/* Toggle Sidebar Button */}
//             {!showSidebar && (
//               <button
//                 className="fixed top-4 left-4 z-30 text-3xl bg-[#E9C8FF] text-[#7851A9] hover:text-[#f2f7ff] hover:bg-[#d9abf7] m-2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CFA5F5] transition-all duration-300 rounded-lg shadow-xl border-[#CFA5F5] border"
//                 onClick={() => setShowSidebar(true)}
//                 aria-label="Open sidebar"
//               >
//                 ☰
//               </button>
//             )}

//       {/* Main Content */}
//       <div
//         className={`transition-all duration-300 ease-in-out p-4 ${
//           showSidebar ? "ml-0 sm:ml-64 md:ml-80 lg:ml-96" : "ml-0"
//         }`}
//       >
//         <h1 
//         className="text-5xl sm:text-5xl md:text-6xl font-bold text-[#444E71] mb-8 tracking-wider text-center drop-shadow-md">
//           SORTING VISUALIZER
//         </h1>

//         <div className="max-w-[1500px] h-[83vh] flex flex-col justify-center items-center gap-2 bg-[#F6F9FE] p-4 mx-auto rounded-lg">
//           {/* Controls */}
//           <div className="flex flex-wrap justify-center items-center gap-[60px]">
//             <div className="text-black">
//               <label className="mr-3 font-medium">Algorithm :</label>
//               <select
//                 className="p-1.5 text-l font-bold rounded text-[#4e6dd4] border-2"
//                 value={selectedAlgorithm}
//                 onChange={(e) => setSelectedAlgorithm(e.target.value as AlgorithmKey)}
//               >
//                 <option>Bubble Sort</option>
//                 <option>Insertion Sort</option>
//                 <option>Selection Sort</option>
//                 <option>Merge Sort</option>
//                 <option>Quick Sort</option>
//                 <option>Heap Sort</option>
//               </select>
//             </div>

//             <div className="text-black font-medium flex flex-col items-start">
//               <label className="text-md font-semibold mb-0">Speed: {speedLevel}x </label>
//               <input
//                 type="range"
//                 min="1"
//                 max="10"
//                 step="1"
//                 value={speedLevel}
//                 onChange={(e) => setSpeedLevel(Number(e.target.value))}
//                 className="w-48 accent-[#F56A6E] "
//               />
//               <div className="flex justify-between w-48 text-sm ml-0 mt-[-5px] px-1">
//                 <span>1x</span>
//                 <span>5x</span>
//                 <span>10x</span>
//               </div>
//           </div>

//             <div className="text-black text-md font-medium">
//               <label className="mr-2">Size:</label>
//               <span>{arraySize} bars </span>
//               <div>
//               <input
//                 type="range"
//                 min="10"
//                 max="90"
//                 step="2"
//                 value={arraySize}
//                 onChange={(e) => setArraySize(Number(e.target.value))}
//                 className="accent-[#F56A6E]"
//               />
//               </div>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={generateArray}
//               className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 font-semibold"
//               disabled={isSorting}
//             >
//               Generate New Array
//             </button>
//             <button
//               onClick={handleSort}
//               className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-semibold"
//               disabled={isSorting}
//             >
//               Start Sort
//             </button>

//             <button
//               onClick={togglePause}
//               className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 font-semibold flex flex-col items-center justify-center w-20"
//             >
//               <span className="text-3xl">
//                     {isPaused ? "▶" : "⏸"}
//               </span>
//               <span className="text-sm mt-0">
//                 {isPaused ? "Resume" : "Pause"}
//               </span>
//             </button>

//           </div>

//           {/* Bars Display */}
//           <div className="mt-6 w-full max-w-6xl h-[400px] bg-[#FDFFFF] rounded flex items-end justify-center px-2 overflow-hidden">
//             {array.map((value, idx) => (
//               <div
//                 key={idx}
//                 className={`mx-[1.5px] w-[8px] sm:w-[10px] md:w-[12px] transition-all duration-100 ease-in-out ${
//                   highlightedIndices.includes(idx)
//                     ? "bg-[#F56A6E] border-2 border-red-400"
//                     : "bg-[#6E96EB]"
//                 }`}
//                 style={{ height: `${value * 3.8}px` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
// </motion.div>
//   );
// };

// export default SortingVisualizer;







import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  heapSort,
  mergeSort,
} from "../utils/sortingAlgorithms";
import AlgorithmSidebar from "../components/AlgorithmSidebar";
import type { AlgorithmKey } from "../components/AlgorithmSidebar";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState<number>(30);
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmKey>("Bubble Sort");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [speedLevel, setSpeedLevel] = useState(5); 
  const [isPaused, setIsPaused] = useState(false);

  const delay = 200 - speedLevel * 20;
  const isPausedRef = useRef(false);

  const togglePause = () => {
    setIsPaused((prev) => {
      isPausedRef.current = !prev;
      return !prev;
    });
  };

  const generateArray = () => {
    if (isSorting) return;
    const newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 100) + 5
    );
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  const handleSort = async () => {
    if (isSorting) return;

    const sortFunction = {
      "Bubble Sort": bubbleSort,
      "Insertion Sort": insertionSort,
      "Selection Sort": selectionSort,
      "Quick Sort": quickSort,
      "Heap Sort": heapSort,
      "Merge Sort": mergeSort,
    }[selectedAlgorithm];

    if (!sortFunction) {
      alert("Selected algorithm not implemented.");
      return;
    }

    const animations = sortFunction([...array]);
    let arr = [...array];
    setIsSorting(true);
    setIsPaused(false);
    isPausedRef.current = false;

    for (let i = 0; i < animations.length; i++) {
      while (isPausedRef.current) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      const { type, indices } = animations[i];
      const [a, b] = indices;
      setHighlightedIndices([a, b]);

      if (type === "swap") {
        [arr[a], arr[b]] = [arr[b], arr[a]];
        setArray([...arr]);
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    setHighlightedIndices([]);
    setIsSorting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#F2EFFE]"
    >
      <div className="relative w-screen h-screen overflow-hidden bg-[#F6E9FF]">
        
        <AlgorithmSidebar
          algorithm={selectedAlgorithm}
          show={showSidebar}
          onClose={() => setShowSidebar(false)} 
               
        />

        {!showSidebar && (
          <button
            // className="fixed top-4 left-4 z-30 text-3xl bg-[#E9C8FF] text-[#7851A9] hover:text-[#f2f7ff] hover:bg-[#d9abf7] m-2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CFA5F5] transition-all duration-300 rounded-lg shadow-xl border-[#CFA5F5] border"
            className="fixed top-2 left-2 sm:top-4        sm:left-3 z-30 
             text-2xl sm:text-3xl 
             bg-[#E9C8FF] text-[#7851A9] 
             hover:text-[#f2f7ff] hover:bg-[#d9abf7] 
             m-1 sm:m-2 px-2 py-1 sm:px-3 sm:py-2 
             focus:outline-none focus:ring-2 focus:ring-[#CFA5F5] 
             transition-all duration-300 
             rounded-lg shadow-xl border-[#CFA5F5] border"
            onClick={() => setShowSidebar(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>
        )}

        <div
          className={`transition-all duration-300 ease-in-out p-4 ${
            showSidebar ? "ml-0 sm:ml-64 md:ml-80 lg:ml-96" : "ml-0"
          }`}
        >



          <h1 
            className="text-5xl sm:text-5xl md:text-6xl font-bold text-[#444E71] mb-8 tracking-wider text-center drop-shadow-md">
            SORTING VISUALIZER
          </h1>

          <div className="max-w-[1500px] h-[83vh] flex flex-col justify-center items-center gap-2 bg-[#F6F9FE] p-4 mx-auto rounded-lg">
            <div className="flex flex-wrap justify-center items-center gap-[60px]">
              <div className="text-black">
                <label className="mr-3 font-medium">Algorithm :</label>
                <select
                  className="p-1.5 text-l font-bold rounded text-[#4e6dd4] border-2"
                  value={selectedAlgorithm}
                  onChange={(e) => setSelectedAlgorithm(e.target.value as AlgorithmKey)}
                >
                  <option>Bubble Sort</option>
                  <option>Insertion Sort</option>
                  <option>Selection Sort</option>
                  <option>Merge Sort</option>
                  <option>Quick Sort</option>
                  <option>Heap Sort</option>
                </select>
              </div>

              <div className="text-black font-medium flex flex-col items-start">
                <label className="text-md font-semibold mb-0">Speed: {speedLevel}x </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={speedLevel}
                  onChange={(e) => setSpeedLevel(Number(e.target.value))}
                  className="w-48 accent-[#F56A6E] "
                />
                <div className="flex justify-between w-48 text-sm ml-0 mt-[-5px] px-1">
                  <span>1x</span>
                  <span>5x</span>
                  <span>10x</span>
                </div>
              </div>

              <div className="text-black text-md font-medium">
                <label className="mr-2">Size:</label>
                <span>{arraySize} bars </span>
                <div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="2"
                    value={arraySize}
                    onChange={(e) => setArraySize(Number(e.target.value))}
                    className="accent-[#F56A6E]"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={generateArray}
                className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 font-semibold"
                disabled={isSorting}
              >
                Generate New Array
              </button>
              <button
                onClick={handleSort}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-semibold"
                disabled={isSorting}
              >
                Start Sort
              </button>

              <button
                onClick={togglePause}
                className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 font-semibold flex flex-col items-center justify-center w-20"
                disabled={!isSorting}
              >
                <span className="text-3xl">
                  {isPaused ? "▶" : "⏸"}
                </span>
                <span className="text-sm mt-0">
                  {isPaused ? "Resume" : "Pause"}
                </span>
              </button>
            </div>

            <div className="mt-6 w-full max-w-6xl h-[400px] bg-[#FDFFFF] rounded flex items-end justify-center px-2 overflow-hidden">
              {array.map((value, idx) => (
                <div
                  key={idx}
                  className={`mx-[1.5px] w-[8px] sm:w-[10px] md:w-[12px] transition-all duration-100 ease-in-out ${
                    highlightedIndices.includes(idx)
                      ? "bg-[#F56A6E] border-2 border-red-400"
                      : "bg-[#6E96EB]"
                  }`}
                  style={{ height: `${value * 3.8}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SortingVisualizer;
