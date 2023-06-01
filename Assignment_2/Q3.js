// Q3

// Alogrithm

// Create a frequency map to count the occurrences of each number in the nums array.
// Initialize a variable maxLen to 0.
// Iterate through the frequency map and for each number num:
// Check if num + 1 exists in the frequency map.
// If it exists, update maxLen to the maximum of maxLen and the sum of the frequencies of num and num + 1.
// Return maxLen.

// Time complexity: O(n), where n is the length of the nums array. The algorithm iterates through the nums array once to build the frequency map and then iterates through the frequency map, which has at most n entries.
// Space complexity: O(n), as the algorithm uses a frequency map to store the counts of each number in the nums array. The space required is proportional to the number of unique numbers in nums, which can be at most n in the worst case.


function findLHS(nums) {
    const frequencyMap = new Map();
    let maxLen = 0;
  
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    for (const [num, count] of frequencyMap) {
      if (frequencyMap.has(num + 1)) {
        maxLen = Math.max(maxLen, count + frequencyMap.get(num + 1));
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result); // Output: 5
  
//   In the given example, the longest harmonious subsequence is [3, 2, 2, 2, 3]. The frequency map of the numbers in the nums array is as follows:

// {
//     1: 1,
//     3: 2,
//     2: 3,
//     5: 1,
//     7: 1
//   }
  