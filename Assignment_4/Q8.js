// Create an empty array result to store the rearranged elements.
// Iterate from 0 to n - 1 using a loop variable i.
// Push nums[i] from the first half of nums into the result array.
// Push nums[i + n] from the second half of nums into the result array.
// Return the result array as the rearranged array.

function shuffle(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
    return result;
  }
  
  // Test case
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  console.log(shuffle(nums, n));

  
//   The time complexity of this algorithm is O(n), where n is the length of the nums array. The space complexity is O(n) as we create a new array result to store the rearranged elements.
