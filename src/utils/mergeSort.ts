export type AnimationStep = {
  type: 'compare' | 'swap' | 'overwrite';
  indices: number[];
  newValue?: number;
};

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
