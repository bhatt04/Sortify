
// SORTING PAGE WITHOUT SIDE PANEL

// import React, { useEffect, useState } from 'react';
// import {
//   bubbleSort,
//   insertionSort,
//   selectionSort,
//   quickSort,
//   heapSort, 
//   mergeSort,
// } from '../utils/sortingAlgorithms';
// const SortingVisualizer: React.FC = () => {
//   const [array, setArray] = useState<number[]>([]);
//   const [arraySize, setArraySize] = useState<number>(30);
//   const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
//   const [speed, setSpeed] = useState<number>(100);
//   const [isSorting, setIsSorting] = useState<boolean>(false);
//   const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('Bubble Sort');
//   const generateArray = () => {
//     if (isSorting) return;
//     const newArray = Array.from({ length: arraySize }, () =>
//       Math.floor(Math.random() * (100 - 5 + 1)) + 5
//     );
//     setArray(newArray);
//   };
//   useEffect(() => {
//     generateArray();
//   }, [arraySize]);
//   const handleSort = () => {
//     if (isSorting) return;
//     let sortFunction;
//     switch (selectedAlgorithm) {
//       case 'Bubble Sort':
//         sortFunction = bubbleSort;
//         break;
//       case 'Insertion Sort':
//         sortFunction = insertionSort;
//         break;
//       case 'Selection Sort':
//         sortFunction = selectionSort;
//         break;
//       case 'Quick Sort':
//         sortFunction = quickSort;
//         break;
//       case 'Heap Sort':
//         sortFunction = heapSort;
//         break;
//       case 'Merge Sort':
//         sortFunction = mergeSort;
//         break;
//       default:
//         alert('Selected algorithm not implemented.');
//         return;
//     }
//     const animations = sortFunction([...array]);
//     let arr = [...array];
//     let i = 0;
//     setIsSorting(true);
//     const interval = setInterval(() => {
//       if (i >= animations.length) {
//         clearInterval(interval);
//         setHighlightedIndices([]);
//         setIsSorting(false);
//         return;
//       }
//       const { type, indices } = animations[i];
//       const [a, b] = indices;
//       setHighlightedIndices([a, b]);
//       if (type === 'swap') {
//         [arr[a], arr[b]] = [arr[b], arr[a]];
//         setArray([...arr]);
//       }
//       i++;
//     }, speed);
//   };
//   return (
//     <div className="min-h-screen w-screen bg-[#F2EFFE] pt-6 pb-4 flex flex-col items-center">
//       <h1 className="text-5xl font-bold text-[#444E71] mb-8 tracking-wider text-center w-full">SORTING VISUALIZER</h1>
//       <div className="w-[100vw] max-w-[1500px] h-[83vh] flex flex-col justify-center items-center gap-2 bg-[#F6F9FE] p-4">
//         {/* Controls */}
//         <div className="flex flex-wrap justify-center items-center gap-[50px]">
//           <div className="text-black">
//             <label className="mr-3 font-medium">Algorithm :</label>
//             <select
//               className="p-1.5 text-l font-bold rounded text-[#4e6dd4] border-2 custom-scroll"
//               value={selectedAlgorithm}
//               onChange={(e) => setSelectedAlgorithm(e.target.value)}
//             >
//               <option>Bubble Sort</option>
//               <option>Insertion Sort</option>
//               <option>Selection Sort</option>
//               <option>Merge Sort</option>
//               <option>Quick Sort</option>
//               <option>Heap Sort</option>
//             </select>
//           </div>
//           <div className="text-black font-medium">
//             <label className="mr-2">Speed:</label>
//             <span className="text-m text-center">{speed} ms</span>
//             <div className="flex items-center gap-3">
//               <input
//                 type="range"
//                 min="10"
//                 max="200"
//                 step="10"
//                 value={speed}
//                 onChange={(e) => setSpeed(Number(e.target.value))}
//                 className="accent-[#F56A6E]"
//               />
//             </div>
//           </div>
//           <div className="text-black font-medium">
//             <label className="mr-2">Size:</label>
//             <span className="text-m text-center">{arraySize} bars</span>
//             <div className="flex items-center gap-3">
//               <input
//                 type="range"
//                 min="10"
//                 max="90"
//                 step="2"
//                 value={arraySize}
//                 onChange={(e) => setArraySize(Number(e.target.value))}
//                 className="accent-[#F56A6E]"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-center items-center gap-[20px] mt-4">
//           <button
//             onClick={generateArray}
//             className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 font-semibold"
//             disabled={isSorting}
//           >
//             Generate New Array
//           </button>
//           <button
//             onClick={handleSort}
//             className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-semibold"
//             disabled={isSorting}
//           >
//             Start Sort
//           </button>
//         </div>
//         {/* Bars */}
//         <div className="mt-2 w-full max-w-6xl h-[400px] bg-[#FDFFFF] rounded flex items-end justify-center px-2 overflow-hidden">
//           {array.map((value, idx) => (
//             <div
//               key={idx}
//               className={`mx-[1.5px] w-[8px] sm:w-[10px] md:w-[12px] transition-all duration-100 ease-in-out ${
//                 highlightedIndices.includes(idx)
//                   ? 'bg-[#F56A6E] border-2 border-red-400'
//                   : 'bg-[#6E96EB]'
//               }`}
//               style={{ height: `${value * 3.8}px` }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SortingVisualizer;





import React, { useEffect, useState } from "react";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  heapSort,
  mergeSort,
} from "../utils/sortingAlgorithms";
import AlgorithmSidebar from "../components/AlgorithmSidebar";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState<number>(30);
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState<number>(80);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("Bubble Sort");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

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

  const handleSort = () => {
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
    let i = 0;
    setIsSorting(true);

    const interval = setInterval(() => {
      if (i >= animations.length) {
        clearInterval(interval);
        setHighlightedIndices([]);
        setIsSorting(false);
        return;
      }

      const { type, indices } = animations[i];
      const [a, b] = indices;
      setHighlightedIndices([a, b]);

      if (type === "swap") {
        [arr[a], arr[b]] = [arr[b], arr[a]];
        setArray([...arr]);
      }

      i++;
    }, speed);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#F6E9FF]">
      {/* Sidebar with animation */}
      <AlgorithmSidebar
        algorithm={selectedAlgorithm}
        show={showSidebar}
        onClose={() => setShowSidebar(false)}
      />

      {/* Toggle Sidebar Button */}
      {!showSidebar && (
        <button
          className="fixed top-4 left-4 z-30 text-3xl bg-[#E9C8FF] text-[#7851A9] hover:text-[#6E96EB] m-2 px-3 py-2"
          onClick={() => setShowSidebar(true)}
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showSidebar ? "ml-96" : "ml-0"
        } p-4`}
      >
        <h1 className="text-5xl font-bold text-[#444E71] mb-8 tracking-wider text-center">
          SORTING VISUALIZER
        </h1>

        <div className="max-w-[1500px] h-[83vh] flex flex-col justify-center items-center gap-2 bg-[#F6F9FE] p-4 mx-auto rounded-lg">
          {/* Controls */}
          <div className="flex flex-wrap justify-center items-center gap-[50px]">
            <div className="text-black">
              <label className="mr-3 font-medium">Algorithm :</label>
              <select
                className="p-1.5 text-l font-bold rounded text-[#4e6dd4] border-2"
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
              >
                <option>Bubble Sort</option>
                <option>Insertion Sort</option>
                <option>Selection Sort</option>
                <option>Merge Sort</option>
                <option>Quick Sort</option>
                <option>Heap Sort</option>
              </select>
            </div>

            <div className="text-black font-medium">
              <label className="mr-2">Speed:</label>
              <span>{speed} ms</span>
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="accent-[#F56A6E]"
              />
            </div>

            <div className="text-black font-medium">
              <label className="mr-2">Size:</label>
              <span>{arraySize} bars</span>
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

          {/* Buttons */}
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
          </div>

          {/* Bars Display */}
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
  );
};

export default SortingVisualizer;