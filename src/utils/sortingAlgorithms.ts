// export type AnimationStep =
//   | { type: 'compare'; indices: [number, number] }
//   | { type: 'swap'; indices: [number, number] };

// export type AnimationStep =
//   | { type: 'compare'; indices: [number, number] }
//   | { type: 'swap'; indices: [number, number] }
//   | { type: 'overwrite'; indices: [number, number] }; // index, value

export type AnimationStep = {
  type: 'compare' | 'swap' | 'overwrite';
  indices: number[];
  newValue?: number;
};


// BUBBLE SORT
export function bubbleSort(array: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];
  const arr = [...array];

for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      animations.push({ type: 'compare', indices: [j, j + 1] });

      if (arr[j] > arr[j + 1]) {
        animations.push({ type: 'swap', indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return animations;
}


// INSERTION SORT
export function insertionSort(array: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0) {
      animations.push({ type: 'compare', indices: [j, j - 1] });

      if (arr[j] < arr[j - 1]) {
        animations.push({ type: 'swap', indices: [j, j - 1] });
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }

      j--;
    }
  }

  return animations;
}


//SELECTION SORT
export function selectionSort(array: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      animations.push({ type: 'compare', indices: [j, minIndex] });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      animations.push({ type: 'swap', indices: [i, minIndex] });
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return animations;
}


//QUICK SORT

export function quickSort(array: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];
  const arr = [...array];

  function partition(start: number, end: number): number {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      animations.push({ type: 'compare', indices: [j, end] });
      if (arr[j] < pivot) {
        animations.push({ type: 'swap', indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    animations.push({ type: 'swap', indices: [i, end] });
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
  }

  function quick(start: number, end: number) {
    if (start < end) {
      const pi = partition(start, end);
      quick(start, pi - 1);
      quick(pi + 1, end);
    }
  }

  quick(0, arr.length - 1);
  return animations;
}


// HEAP SORT
export function heapSort(array: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];
  const arr = [...array];
  const n = arr.length;

  const heapify = (n: number, i: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
      animations.push({ type: 'compare', indices: [left, largest] });
      if (arr[left] > arr[largest]) largest = left;
    }

    if (right < n) {
      animations.push({ type: 'compare', indices: [right, largest] });
      if (arr[right] > arr[largest]) largest = right;
    }

    if (largest !== i) {
      animations.push({ type: 'swap', indices: [i, largest] });
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(n, largest);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
  for (let i = n - 1; i > 0; i--) {
    animations.push({ type: 'swap', indices: [0, i] });
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }

  return animations;
}


// // MERGE SORT
// export function mergeSort(array: number[]): AnimationStep[] {
//   const animations: AnimationStep[] = [];
//   const arr = [...array];

//   function merge(start: number, mid: number, end: number) {
//     const left = arr.slice(start, mid + 1);
//     const right = arr.slice(mid + 1, end + 1);
//     let i = 0, j = 0, k = start;

//     while (i < left.length && j < right.length) {
//       animations.push({ type: 'compare', indices: [start + i, mid + 1 + j] });

//       if (left[i] <= right[j]) {
//         animations.push({ type: 'overwrite', indices: [k, left[i]] });
//         arr[k++] = left[i++];
//       } else {
//         animations.push({ type: 'overwrite', indices: [k, right[j]] });
//         arr[k++] = right[j++];
//       }
//     }

//     while (i < left.length) {
//       animations.push({ type: 'overwrite', indices: [k, left[i]] });
//       arr[k++] = left[i++];
//     }

//     while (j < right.length) {
//       animations.push({ type: 'overwrite', indices: [k, right[j]] });
//       arr[k++] = right[j++];
//     }
//   }

//   function mergeSortHelper(start: number, end: number) {
//     if (start < end) {
//       const mid = Math.floor((start + end) / 2);
//       mergeSortHelper(start, mid);
//       mergeSortHelper(mid + 1, end);
//       merge(start, mid, end);
//     }
//   }

//   mergeSortHelper(0, arr.length - 1);
//   return animations;
// }






export function mergeSort(array: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];

  function mergeSortHelper(arr: number[], start: number, end: number) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  function merge(arr: number[], start: number, mid: number, end: number) {
    const temp: number[] = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
      animations.push({ type: 'compare', indices: [i, j] });
      if (arr[i] <= arr[j]) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }

    while (i <= mid) {
      temp.push(arr[i++]);
    }
    while (j <= end) {
      temp.push(arr[j++]);
    }

    for (let k = 0; k < temp.length; k++) {
      animations.push({
        type: 'overwrite',
        indices: [start + k],
        newValue: temp[k],
      });
      arr[start + k] = temp[k];
    }
  }

  const arrCopy = [...array];
  mergeSortHelper(arrCopy, 0, arrCopy.length - 1);
  return animations;
}
