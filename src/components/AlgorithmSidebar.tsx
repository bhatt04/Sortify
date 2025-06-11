// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// interface Props {
//   algorithm: string;
//   show: boolean;
//   onClose: () => void;
// }
// const descriptions: Record<string, string> = {
//   "Bubble Sort": "Compares adjacent elements and swaps them if they're in the wrong order. Repeats this process until the array is sorted.",
//   "Quick Sort": "Divide and conquer algorithm using a pivot to partition the array.",
//   "Merge Sort": "Divides, sorts, and merges arrays. Very efficient and stable.",
// };
// const AlgorithmSidebar: React.FC<Props> = ({ algorithm, show, onClose }) => {
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           initial={{ x: -300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -300, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed top-1 left-1 h-full text-sm w-[28%] bg-gray-800  p-6 shadow-lg z-20 rounded-xl"
//         >
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-3xl font-bold text-[#E0B0FF] p-6">{algorithm}</h2>
//             <button 
//             onClick={onClose} 
//             className="text-gray-800  bg-[#E0B0FF] hover:bg-[#C58CEB] hover:text-white px-3 py-2 rounded ">✕</button>
//           </div>
//           <p className="text-l text-gray-300">
//             {descriptions[algorithm]}
//           </p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };
// export default AlgorithmSidebar;






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// type AlgorithmKey = "Bubble Sort" | "Insertion Sort" | "Selection Sort" | "Merge Sort" | "Quick Sort" | "Heap Sort";


// interface Props {
//   algorithm: string;
//   show: boolean;
//   onClose: () => void;
// }


export type AlgorithmKey =
  | "Bubble Sort"
  | "Insertion Sort"
  | "Selection Sort"
  | "Merge Sort"
  | "Quick Sort"
  | "Heap Sort";




const data: Record<AlgorithmKey, {
  overview: string;
  characteristics: string[];
  steps: string[];
  complexity: string[];
  code: {
    cpp: string;
    c: string;
    python: string;
  };
}> = {

    // BUBBLE SORT
  "Bubble Sort": {
    overview: "Compares adjacent elements and swaps them if they're in the wrong order. Repeats this process until the array is sorted.",
    characteristics: [
      "Simple and intuitive",
      "Stable sort",
      "Best suited for small datasets",
    ],
    steps: [
      "Traverse the array",
      "Compare adjacent elements",
      "Swap if needed",
      "Repeat until no swaps are needed",
    ],
    complexity: [
      "Time ( Best ) :  O(n)",
      "Time (Average / Worst) :  O(n²)",
      "Space :  O(1)",
      "Stable : Yes",
    ],
    code: {
      cpp: `void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++)
    for (int j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        std::swap(arr[j], arr[j + 1]);
}`,
      c: `void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++)
    for (int j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
}`,
      python: `def bubble_sort(arr) : 
  n = len(arr)
  for i in range(n) : 
    for j in range(0, n - i - 1) : 
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
    },
  },

  // INSERTION SORT

  "Insertion Sort": {
    overview: "Builds the sorted array one element at a time by inserting elements at the correct position.",
    characteristics: [
      "Simple implementation",
      "Efficient for small or nearly sorted arrays",
      "Stable sort",
    ],
    steps: [
      "Start from the second element",
      "Compare with previous elements",
      "Shift elements and insert at the correct position",
      "Repeat for all elements",
    ],
    complexity: [
      "Time ( Best ) :  O(n)",
      "Time (Average / Worst) :  O(n²)",
      "Space :  O(1)",
      "Stable : Yes",
    ],
    code: {
      cpp: `void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}`,
      c: `void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}`,
      python: `def insertion_sort(arr) : 
  for i in range(1, len(arr)) : 
    key = arr[i]
    j = i - 1
    while j >= 0 and key < arr[j]:
      arr[j + 1] = arr[j]
      j -= 1
    arr[j + 1] = key`,
    },
  },

  // SELECTION SORT

  "Selection Sort": {
    overview: "Finds the minimum element from unsorted part and places it at the beginning. Repeats until sorted.",
    characteristics: [
      "Simple to implement",
      "Not stable",
      "Works in-place",
    ],
    steps: [
      "Start from index 0",
      "Find the minimum element in unsorted array",
      "Swap with current element",
      "Move to the next index",
    ],
    complexity: [
      "Time (Best/Average / Worst) :  O(n²)",
      "Space :  O(1)",
      "Stable : No",
    ],
    code: {
      cpp: `void selectionSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int min_idx = i;
    for (int j = i + 1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;
    std::swap(arr[min_idx], arr[i]);
  }
}`,
      c: `void selectionSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int min_idx = i;
    for (int j = i + 1; j < n; j++)
      if (arr[j] < arr[min_idx])
        min_idx = j;
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
}`,
      python: `def selection_sort(arr) : 
  for i in range(len(arr)) : 
    min_idx = i
    for j in range(i + 1, len(arr)) : 
      if arr[j] < arr[min_idx]:
        min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]`,
    },
  },

  // MERGE SORT

  "Merge Sort": {
    overview: "A divide-and-conquer algorithm that divides the array, sorts each half, and merges them together.",
    characteristics: [
      "Recursive and stable",
      "Efficient for large datasets",
      "Uses extra space",
    ],
    steps: [
      "Divide the array into halves",
      "Recursively sort both halves",
      "Merge the sorted halves",
    ],
    complexity: [
      "Time (Best/Average / Worst) :  O(n log n)",
      "Space :  O(n)",
      "Stable : Yes",
    ],
    code: {
      cpp: `void merge(int arr[], int l, int m, int r) {
  int n1 = m - l + 1, n2 = r - m;
  int L[n1], R[n2];
  for (int i = 0; i < n1; i++) L[i] = arr[l + i];
  for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  int i = 0, j = 0, k = l;
  while (i < n1 && j < n2)
    arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
  while (i < n1) arr[k++] = L[i++];
  while (j < n2) arr[k++] = R[j++];
}
void mergeSort(int arr[], int l, int r) {
  if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}`,
      c: `// Similar structure to C++ version, using malloc for dynamic allocation
void merge(int arr[], int l, int m, int r) {
  int n1 = m - l + 1, n2 = r - m;
  int *L = malloc(n1 * sizeof(int));
  int *R = malloc(n2 * sizeof(int));
  for (int i = 0; i < n1; i++) L[i] = arr[l + i];
  for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  int i = 0, j = 0, k = l;
  while (i < n1 && j < n2)
    arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
  while (i < n1) arr[k++] = L[i++];
  while (j < n2) arr[k++] = R[j++];
  free(L); free(R);
}
void mergeSort(int arr[], int l, int r) {
  if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}`,
      python: `def merge_sort(arr) : 
  if len(arr) > 1:
    mid = len(arr) // 2
    L = arr[:mid]
    R = arr[mid:]
    merge_sort(L)
    merge_sort(R)
    i = j = k = 0
    while i < len(L) and j < len(R) : 
      if L[i] < R[j]:
        arr[k] = L[i]
        i += 1
      else:
        arr[k] = R[j]
        j += 1
      k += 1
    while i < len(L) : 
      arr[k] = L[i]
      i += 1; k += 1
    while j < len(R) : 
      arr[k] = R[j]
      j += 1; k += 1`,
    },
  },

  // QUICK SORT

  "Quick Sort": {
    overview: "A fast divide-and-conquer algorithm that picks a pivot and partitions the array around it.",
    characteristics: [
      "In-place sorting",
      "Not stable",
      "Efficient for large datasets",
    ],
    steps: [
      "Choose a pivot element",
      "Partition the array into elements less and greater than pivot",
      "Recursively sort partitions",
    ],
    complexity: [
      "Time (Best/Average) :  O(n log n)",
      "Time (Worst) :  O(n²)",
      "Space :  O(log n)",
      "Stable : No",
    ],
    code: {
      cpp: `int partition(int arr[], int low, int high) {
  int pivot = arr[high], i = low - 1;
  for (int j = low; j < high; j++) {
    if (arr[j] < pivot) std::swap(arr[++i], arr[j]);
  }
  std::swap(arr[i + 1], arr[high]);
  return i + 1;
}
void quickSort(int arr[], int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`,
      c: `int partition(int arr[], int low, int high) {
  int pivot = arr[high], i = low - 1;
  for (int j = low; j < high; j++) {
    if (arr[j] < pivot) {
      int temp = arr[++i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  int temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}
void quickSort(int arr[], int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`,
      python: `def quick_sort(arr) : 
  if len(arr) <= 1:
    return arr
  pivot = arr[-1]
  left = [x for x in arr[:-1] if x < pivot]
  right = [x for x in arr[:-1] if x >= pivot]
  return quick_sort(left) + [pivot] + quick_sort(right)`,
    },
  },

  // HEAP SORT

  "Heap Sort": {
    overview: "A comparison-based sorting using a binary heap to build a max heap and extract the largest element.",
    characteristics: [
      "Not stable",
      "Efficient and in-place",
      "Uses heap data structure",
    ],
    steps: [
      "Build a max heap from the input",
      "Swap the root with the last element",
      "Heapify the reduced heap",
      "Repeat until heap size is 1",
    ],
    complexity: [
      "Time (Best/Average / Worst) :  O(n log n)",
      "Space :  O(1)",
      "Stable : No",
    ],
    code: {
      cpp: `void heapify(int arr[], int n, int i) {
  int largest = i, l = 2*i + 1, r = 2*i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest != i) {
    std::swap(arr[i], arr[largest]);
    heapify(arr, n, largest);
  }
}
void heapSort(int arr[], int n) {
  for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
  for (int i = n - 1; i > 0; i--) {
    std::swap(arr[0], arr[i]);
    heapify(arr, i, 0);
  }
}`,
      c: `void heapify(int arr[], int n, int i) {
  int largest = i, l = 2*i + 1, r = 2*i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest != i) {
    int temp = arr[i]; arr[i] = arr[largest]; arr[largest] = temp;
    heapify(arr, n, largest);
  }
}
void heapSort(int arr[], int n) {
  for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
  for (int i = n - 1; i > 0; i--) {
    int temp = arr[0]; arr[0] = arr[i]; arr[i] = temp;
    heapify(arr, i, 0);
  }
}`,
      python: `def heapify(arr, n, i) : 
  largest = i
  l = 2 * i + 1
  r = 2 * i + 2
  if l < n and arr[l] > arr[largest]:
    largest = l
  if r < n and arr[r] > arr[largest]:
    largest = r
  if largest != i:
    arr[i], arr[largest] = arr[largest], arr[i]
    heapify(arr, n, largest)

def heap_sort(arr) : 
  n = len(arr)
  for i in range(n // 2 - 1, -1, -1) : 
    heapify(arr, n, i)
  for i in range(n - 1, 0, -1) : 
    arr[i], arr[0] = arr[0], arr[i]
    heapify(arr, i, 0)`,
    },
  }as const,
};


interface Props {
  algorithm: AlgorithmKey;
  show: boolean;
  onClose: () => void;
}

const AlgorithmSidebar: React.FC<Props> = ({ algorithm, show, onClose }) => {
  const [lang, setLang] = useState<"cpp" | "c" | "python">("cpp");

  const algo = data[algorithm];

  return (
    <AnimatePresence>
      {show && algo && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-1 left-1 h-[99vh] w-[25%] bg-gray-800 p-6 shadow-lg z-20 rounded-xl overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#c6bcf7]">{algorithm}</h2>
            <button
              onClick={onClose}
              className="text-gray-800 bg-[#d4cdfa] hover:bg-[#C58CEB] hover:text-white px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>

          <div className="text-gray-300 text-l space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white"></h3>
              <p>{algo.overview}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white"></h3>
              <ul className="list-disc ml-5">
                {algo.characteristics.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Steps</h3>
              <ol className="list-decimal ml-5">
                {algo.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Complexity</h3>
              <ul className="list-disc ml-5">
                {algo.complexity.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Code</h3>
              <div className="flex space-x-2 mb-2">
                {["cpp", "c", "python"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l as "cpp" | "c" | "python")}
                    className={`px-2 py-1 rounded text-sm ${
                      lang === l
                        ? "bg-[#d4cdfa] text-gray-900"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <pre className="bg-gray-900 p-3 rounded text-sm text-gray-200 overflow-x-auto whitespace-pre-wrap">
                {algo.code[lang]}
              </pre>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlgorithmSidebar;
