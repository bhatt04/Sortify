import React from 'react';

interface ControlProps {
  speed: number;
  size: number;
  setSpeed: (speed: number) => void;
  setSize: (size: number) => void;
  algorithm: string;
  setAlgorithm: (algo: string) => void;
  handleSort: () => void;
  generateArray: () => void;
  isSorting: boolean;
}

const Control: React.FC<ControlProps> = ({
  speed,
  size,
  setSpeed,
  setSize,
  algorithm,
  setAlgorithm,
  handleSort,
  generateArray,
  isSorting
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
      {/* Algorithm Dropdown */}
      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        disabled={isSorting}
        className="p-2 rounded bg-white text-black"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="heap">Heap Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="merge">Merge Sort</option>
      </select>

      {/* Array Size Slider */}
      <label className="text-white">
        Size: {size}
        <input
          type="range"
          min={10}
          max={100}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="ml-2"
          disabled={isSorting}
        />
      </label>

      {/* Speed Slider */}
      <label className="text-white">
        Speed: {speed}ms
        <input
          type="range"
          min={10}
          max={1000}
          step={10}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="ml-2"
          disabled={isSorting}
        />
      </label>

      {/* Action Buttons */}
      <button
        onClick={generateArray}
        disabled={isSorting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate New Array
      </button>

      <button
        onClick={handleSort}
        disabled={isSorting}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Start Sorting
      </button>
    </div>
  );
};

export default Control;
