// Q1

// Alogrithm

// Sort the nums array in ascending order.
// Initialize a variable sum to store the maximum sum of minimum pairs and set it to 0.
// Iterate over the sorted array with a step size of 2, considering pairs of elements at indices i and i+1.
// For each pair, add the smaller element to the sum.
// Return the value of sum as the maximum sum of minimum pairs.

// Time complexity: O(n log n) due to the sorting operation.
// Space complexity: O(1) as it uses a constant amount of extra space.

function arrayPairSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]; // Add the smaller element of each pair to the sum
  }

  return sum;
}

// Example usage
const nums = [1, 4, 3, 2];
const result = arrayPairSum(nums);
console.log(result); // Output: 4
