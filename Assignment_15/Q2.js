function findNearestSmallerElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1); // Initialize the result array with -1
    const stack = [];
  
    // Iterate over the array from left to right
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop(); // Remove elements greater than or equal to arr[i]
      }
  
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1]; // Set the nearest smaller element
      }
  
      stack.push(arr[i]); // Push the current element into the stack
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [1, 6, 2];
  const result = findNearestSmallerElements(arr);
  console.log(result);
  