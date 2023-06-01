// Q6

// Algorithm

// Initialize two pointers, left and right, pointing to the start and end of the nums array, respectively.
// While left is less than or equal to right:
// Calculate the middle index as (left + right) / 2.
// If the value at the middle index is equal to the target, return the middle index.
// If the value at the middle index is greater than the target, update right to be middle - 1.
// If the value at the middle index is less than the target, update left to be middle + 1.
// If the target is not found after the while loop, return -1.

// Time complexity: O(log n), where n is the length of the nums array. The binary search algorithm has a logarithmic runtime complexity.
// Space complexity: O(1), as the algorithm uses a constant amount of extra space regardless of the input size.





function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const num = nums[middle];
  
      if (num === target) {
        return middle;
      } else if (num > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  
    return -1;
  }
  
  // Example usage
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const result = search(nums, target);
  console.log(result); // Output: 4

//   In the given example, the target value is 9. Using the binary search algorithm, we can find that 9 exists in the nums array at index 4. Therefore, the output is 4.