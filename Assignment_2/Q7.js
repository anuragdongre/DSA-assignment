// Q7

// Algorithm

// Initialize two boolean variables, isIncreasing and isDecreasing, to true.
// Iterate through the nums array starting from index 1:
// If the current element is greater than the previous element, set isIncreasing to false.
// If the current element is less than the previous element, set isDecreasing to false.
// Return the logical OR of isIncreasing and isDecreasing.

// Time complexity: O(n), where n is the length of the nums array. The algorithm iterates through the nums array once.
// Space complexity: O(1), as the algorithm uses a constant amount of extra space regardless of the input size.





function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        isIncreasing = false;
      }
  
      if (nums[i] < nums[i - 1]) {
        isDecreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
  }
  
  // Example usage
  const nums = [1, 2, 2, 3];
  const result = isMonotonic(nums);
  console.log(result); // Output: true
  
//   In the given example, the array [1, 2, 2, 3] is monotonic increasing because every element is either equal to or greater than the previous element. Therefore, the output is true.


