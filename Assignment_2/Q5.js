// Q5

// /Algorithm

// Sort the nums array in non-decreasing order.
// Calculate the product of the last three elements of the sorted array, which will give us the maximum product of three numbers.
// Return the calculated product.

// Time complexity: O(n log n), where n is the length of the nums array. This is due to the sorting operation performed on the array.
// Space complexity: O(1), as the algorithm uses a constant amount of extra space regardless of the input size.






function maximumProduct(nums) {
    nums.sort((a, b) => a - b); // Sort the array in non-decreasing order
  
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of the largest three numbers
    const product2 = nums[0] * nums[1] * nums[n - 1]; // Product of the smallest two numbers and the largest number
  
    return Math.max(product1, product2);
  }
  
  // Example usage
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result); // Output: 6
  