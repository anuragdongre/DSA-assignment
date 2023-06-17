// Create a result array of the same length as nums to store the squared values in the desired order.
// Initialize left to 0, right to nums.length - 1, and i to nums.length - 1.
// While left is less than or equal to right, do the following steps:
// Calculate the square of the number at index left (leftSquare).
// Calculate the square of the number at index right (rightSquare).
// If leftSquare is greater than rightSquare, square the number at index left, store it in the result array at index i, and increment left.
// If leftSquare is less than or equal to rightSquare, square the number at index right, store it in the result array at index i, and decrement right.
// Decrement i.
// Return the result array with the squared numbers in non-decreasing order.

function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let i = nums.length - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[i] = leftSquare;
        left++;
      } else {
        result[i] = rightSquare;
        right--;
      }
      i--;
    }
  
    return result;
  }
  
  // Test case
  const nums = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(nums));
  

//   The time complexity of this algorithm is O(n), where n is the length of the nums array, as we process each element once using the two-pointer approach. The space complexity is O(n) as we create a new result array to store the squared numbers.
