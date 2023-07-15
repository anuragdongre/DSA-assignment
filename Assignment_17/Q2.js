function maxSubarraySumCircular(nums) {
    // Case 1: Maximum sum subarray without wrapping
    let maxSum = -Infinity;
    let currMax = 0;
  
    for (let i = 0; i < nums.length; i++) {
      currMax = Math.max(currMax + nums[i], nums[i]);
      maxSum = Math.max(maxSum, currMax);
    }
  
    // Case 2: Maximum sum subarray with wrapping
    let minSum = Infinity;
    let currMin = 0;
    let totalSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      currMin = Math.min(currMin + nums[i], nums[i]);
      minSum = Math.min(minSum, currMin);
      totalSum += nums[i];
    }
  
    if (totalSum === minSum) {
      return maxSum;
    } else {
      return Math.max(maxSum, totalSum - minSum);
    }
  }
  
  // Example usage:
  console.log(maxSubarraySumCircular([1, -2, 3, -2])); // Output: 3
  console.log(maxSubarraySumCircular([5, -3, 5])); // Output: 10
  console.log(maxSubarraySumCircular([-3, -2, -3])); // Output: -2
  