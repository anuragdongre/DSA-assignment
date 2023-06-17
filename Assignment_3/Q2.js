// Sort the array nums in ascending order.
// Initialize an empty array result to store the unique quadruplets.
// Iterate over the array nums up to the third-to-last element (up to nums.length - 3), considering each element as the potential first element of the quadruplet.
// Check if the current first element is equal to the previous element. If so, skip it to avoid duplicates in the final result.
// For the remaining elements, perform a three-sum approach to find the triplets whose sum is equal to the target value.
// Initialize left as the next element after the current first element and right as the last element of the array.
// While left is less than right, calculate the current sum of the four elements (nums[i], nums[left], nums[right], and the fourth element).
// If the current sum is equal to the target, add the quadruplet [nums[i], nums[left], nums[right], fourthElement] to the result array.
// To handle duplicates, increment left and decrement right until they are different from their previous values and the updated sum is still equal to the target.
// Adjust the pointers accordingly based on the comparison with the target.
// After the loop ends, return the result array containing all the unique quadruplets.

function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

//   given example

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const result = fourSum(nums, target);
console.log(result);
