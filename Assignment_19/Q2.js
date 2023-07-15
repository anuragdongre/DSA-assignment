const countSmaller = (nums) => {
    const counts = new Array(nums.length).fill(0);
    const indexedNums = nums.map((num, index) => [num, index]);
  
    const mergeSort = (arr, start, end) => {
      if (start >= end) {
        return;
      }
  
      const mid = Math.floor((start + end) / 2);
      mergeSort(arr, start, mid);
      mergeSort(arr, mid + 1, end);
      merge(arr, start, mid, end);
    };
  
    const merge = (arr, start, mid, end) => {
      const merged = [];
      let left = start;
      let right = mid + 1;
      let count = 0;
  
      while (left <= mid && right <= end) {
        if (arr[left][0] <= arr[right][0]) {
          counts[arr[left][1]] += count;
          merged.push(arr[left]);
          left++;
        } else {
          merged.push(arr[right]);
          right++;
          count++;
        }
      }
  
      while (left <= mid) {
        counts[arr[left][1]] += count;
        merged.push(arr[left]);
        left++;
      }
  
      while (right <= end) {
        merged.push(arr[right]);
        right++;
      }
  
      for (let i = start; i <= end; i++) {
        arr[i] = merged[i - start];
      }
    };
  
    mergeSort(indexedNums, 0, indexedNums.length - 1);
  
    return counts;
  };
  
  // Example usage:
  console.log(countSmaller([5, 2, 6, 1])); // Output: [2, 1, 1, 0]
  console.log(countSmaller([-1])); // Output: [0]
  console.log(countSmaller([-1, -1])); // Output: [0, 0]
  