// Q2

// Algorithm

// Initialize two pointers, i and k, both pointing to 0.

// Iterate through the array nums from left to right using the i pointer.

// If the element at nums[i] is equal to the given value val, move to the next element by incrementing i.

// If the element at nums[i] is not equal to val, assign it to nums[k], increment k by 1, and move to the next element by incrementing both i and k.

// Repeat steps 3-4 until all elements in the array have been processed.

// Return the value of k, which represents the number of elements in nums that are not equal to val.

//The time complexity of this algorithm is O(n), where n is the length of the array nums, as we iterate through each element once. The algorithm modifies the array in-place, fulfilling the requirements of the problem.

function removeElement(nums, val) {
    let k = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  
  // Example

  const nums = [3, 2, 2, 3];
const val = 3;

const result = removeElement(nums, val);
console.log(result); // Output: 2
console.log(nums); // Output: [2, 2, 2, 3] (the remaining elements are not important)
