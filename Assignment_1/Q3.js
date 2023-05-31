// Q3

//  Algorithm

// Initialize two pointers, left and right, pointing to the start and end of the array nums.

// While left is less than or equal to right, do the following:

// Calculate the middle index as mid using the formula: (left + right) / 2.

// If the element at nums[mid] is equal to the target, return mid as the index where the target is found.

// If the element at nums[mid] is less than the target, update left to mid + 1.

// If the element at nums[mid] is greater than the target, update right to mid - 1.

// If the target is not found in the array, return left as the index where the target would be inserted.

// The time complexity of this algorithm is O(log n), where n is the length of the array nums. This is because we reduce the search space by half in each iteration, resulting in a logarithmic time complexity.

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// Example

const nums = [1, 3, 5, 6];
const target = 5;

const result = searchInsert(nums, target);
console.log(result); // Output: 2
