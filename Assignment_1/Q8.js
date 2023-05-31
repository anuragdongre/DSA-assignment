// Q8

// Algorithm

// Initialize an empty hash set.
// Initialize two variables, duplicate and missing, both initially set to 0.
// Iterate through each element num in the nums array.
// If num is already present in the hash set, assign num to duplicate.
// Add num to the hash set.
// Compute the expected sum of numbers from 1 to nums.length using the formula expectedSum = (nums.length * (nums.length + 1)) / 2.
// Compute the actual sum of all elements in nums by iterating through the array and adding each element to missing.
// Compute missing as expectedSum - missing + duplicate.
// Return [duplicate, missing] as the result.

// The time complexity of this algorithm is O(n), where n is the length of the nums array, as we iterate through each element once.

function findErrorNums(nums) {
    const set = new Set();
    let duplicate = 0;
    let missing = 0;
  
    for (const num of nums) {
      if (set.has(num)) {
        duplicate = num;
      }
      set.add(num);
      missing += num;
    }
  
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    missing = expectedSum - missing + duplicate;
  
    return [duplicate, missing];
  }

//   Example

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]

