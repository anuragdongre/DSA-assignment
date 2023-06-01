// Q8

// Algorithm

// Initialize minNum and maxNum as the first element of the nums array.
// Iterate through the nums array starting from the second element:
// Update minNum as the minimum between the current element and minNum.
// Update maxNum as the maximum between the current element and maxNum.
// Calculate the initial score as maxNum - minNum.
// If k is greater than or equal to the difference between maxNum and minNum, return 0 as the minimum score.
// Otherwise, return the minimum value among the following options:
// The initial score maxNum - minNum after applying the operation to the first element of the array.
// The initial score after applying the operation to the last element of the array.

// Time complexity: O(n), where n is the length of the nums array. The algorithm iterates through the nums array once.
// Space complexity: O(1), as the algorithm uses a constant amount of extra space regardless of the input size.

function minimumScore(nums, k) {
  let minNum = nums[0];
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    minNum = Math.min(minNum, nums[i]);
    maxNum = Math.max(maxNum, nums[i]);
  }

  const initialScore = maxNum - minNum;

  if (k >= initialScore) {
    return 0;
  } else {
    return Math.min(initialScore - k, initialScore - k);
  }
}

// Example usage
const nums = [1];
const k = 0;
const result = minimumScore(nums, k);
console.log(result); // Output: 0

//   In the given example, the nums array is [1] and k is 0. Since there is only one element in the array, the maximum and minimum elements are both 1. Therefore, the score is 1 - 1 = 0, and the output is 0.
