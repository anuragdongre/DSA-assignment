// Initialize an empty list result to store the ranges of missing numbers.
// Set a variable start to lower.
// Iterate through each number num in nums:
// If num is equal to start, increment start by 1.
// If num is greater than start, add the range [start, num-1] to result and set start to num + 1.
// If start is less than or equal to upper, add the range [start, upper] to result.
// Return the result.

function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
  
    for (let num of nums) {
      if (num === start) {
        start++;
      } else if (num > start) {
        result.push(getRange(start, num - 1));
        start = num + 1;
      }
    }
  
    if (start <= upper) {
      result.push(getRange(start, upper));
    }
  
    return result;
  }
  
  function getRange(start, end) {
    return start === end ? [start.toString()] : [start.toString(), end.toString()];
  }
  
  // Test case
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  console.log(findMissingRanges(nums, lower, upper));
  // Output: [['2'], ['4', '49'], ['51', '74'], ['76', '99']]

//   The algorithm uses a linear scan of the input array nums, so the time complexity is O(n), where n is the length of nums. The space complexity is O(1) since we are using only a constant amount of extra memory for the result list.
