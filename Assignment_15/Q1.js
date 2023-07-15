function findNextGreaterElements(arr) {
    const n = arr.length;
    const result = new Array(n);
    const stack = [];
  
    // Iterate over the array from right to left
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop(); // Remove elements smaller than or equal to arr[i]
      }
  
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1]; // Set the next greater element
      } else {
        result[i] = -1; // No next greater element found
      }
  
      stack.push(arr[i]); // Push the current element into the stack
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [1, 3, 2, 4];
  const result = findNextGreaterElements(arr);
  console.log(result);
  