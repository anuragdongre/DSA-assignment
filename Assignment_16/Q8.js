function maxAbsDiff(arr) {
    const n = arr.length;
    const leftSmaller = [];
    const rightSmaller = [];
    
    // Find the nearest smaller element on the left side
    const stack1 = [];
    for (let i = 0; i < n; i++) {
      while (stack1.length > 0 && stack1[stack1.length - 1] >= arr[i]) {
        stack1.pop();
      }
      if (stack1.length === 0) {
        leftSmaller[i] = 0;
      } else {
        leftSmaller[i] = stack1[stack1.length - 1];
      }
      stack1.push(arr[i]);
    }
  
    // Find the nearest smaller element on the right side
    const stack2 = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack2.length > 0 && stack2[stack2.length - 1] >= arr[i]) {
        stack2.pop();
      }
      if (stack2.length === 0) {
        rightSmaller[i] = 0;
      } else {
        rightSmaller[i] = stack2[stack2.length - 1];
      }
      stack2.push(arr[i]);
    }
  
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
      const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
      maxDiff = Math.max(maxDiff, diff);
    }
  
    return maxDiff;
  }
  
  // Example usage:
  const arr1 = [2, 1, 8];
  console.log(maxAbsDiff(arr1)); // Output: 1
  
  const arr2 = [2, 4, 8, 7, 7, 9, 3];
  console.log(maxAbsDiff(arr2)); // Output: 4
  
  const arr3 = [5, 1, 9, 2, 5, 1, 7];
  console.log(maxAbsDiff(arr3)); // Output: 1
  