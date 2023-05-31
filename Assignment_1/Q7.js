// Q7

// Alogrithm

// Initialize two pointers, i and j, both starting at index 0.
// Iterate through the array using the pointer i.
// If the element at nums[i] is non-zero, set nums[j] to the value of nums[i] and increment j.
// After the loop finishes, all non-zero elements have been moved to the left side of the array, up to index j.
// Iterate through the array from index j to the end and set all elements to 0.
// Return the modified nums array.

// The time complexity of this algorithm is O(n), where n is the length of the nums array, as we iterate through each element once.

function moveZeroes(nums) {
    let i = 0;
    let j = 0;
  
    while (i < nums.length) {
      if (nums[i] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      }
      i++;
    }
  
    while (j < nums.length) {
      nums[j] = 0;
      j++;
    }
  
    return nums;
  }


// Example

const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result); // Output: [1, 3, 12, 0, 0]
