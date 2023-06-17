// Sort the nums array in ascending order using the compare function (a, b) => a - b.
// Initialize a variable sum to 0 to store the sum of the minimum values.
// Iterate through the nums array with a step of 2 (i.e., i += 2) to access every alternate element.
// Add the element at index i to the sum.
// Repeat steps 3-4 until the end of the array is reached.
// Return the sum as the maximized sum of the minimum values in the pairs.

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Test case
  const nums = [1, 4, 3, 2];
  console.log(arrayPairSum(nums));

  
//   The time complexity of this algorithm is O(n log n) due to the sorting operation. The space complexity is O(1) as we only use a constant amount of additional space to store the sum variable.

