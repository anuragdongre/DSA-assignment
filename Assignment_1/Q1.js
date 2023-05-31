// ....Q1....

// ALGORITHM

// 1 Create an empty hash map (object in JavaScript) to store elements and their indices.

// 2 Iterate through the array.

// 3 For each element, calculate the complement by subtracting it from the target.

// 4 Check if the complement exists in the hash map.

// 5 Add the current element and its index to the hash map.

// 6 If the loop completes without finding a solution, return an empty array to indicate no valid pair was found.


// SOLUTION

function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[num] = i;
  }

  return [];
}

// Example

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]


