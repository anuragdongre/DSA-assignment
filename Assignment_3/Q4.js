// Iterate over the elements in the sorted array.
// Compare each element with the target value.
// If the element is equal to the target, return its index.
// If the element is greater than the target, return the current index as the position where the target would be inserted.
// If the loop completes without finding a matching element, return the length of the array as the position where the target would be inserted.

function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        return i;
      }
    }
  
    return nums.length;
  }
  
  // Test case
  const nums = [1, 3, 5, 6];
  const target = 5;
  console.log(searchInsert(nums, target));  // Output: 2

  
  