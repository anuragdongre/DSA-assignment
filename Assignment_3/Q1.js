// Algorithm:

// Sort the array nums in ascending order.
// Initialize a variable closestSum to store the closest sum found so far. Set it to a very large value initially.
// Iterate over the sorted array nums from left to right, considering each element as the potential first element of the triplet.
// For the current first element, use two pointers approach to find the other two elements whose sum, along with the first element, is closest to the target value.
// Initialize two pointers, left and right, where left starts at the next element after the current first element, and right starts at the last element of the array.
// While left is less than right, calculate the current sum of the three elements (nums[i], nums[left], and nums[right]).
// If the current sum is equal to the target, return the target value since we found an exact match.
// Otherwise, update the closestSum if the current sum is closer to the target than the previous closest sum.
// Adjust the pointers accordingly based on the comparison with the target.
// After the loop ends, return the closestSum value, which represents the sum of the three integers closest to the target.

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === target) {
        return target;
      }

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

//given example

const nums = [-1, 2, 1, -4];
const target = 1;

const result = threeSumClosest(nums, target);
console.log(result); // Output: 2

// Time Complexity: The time complexity of this algorithm is O(n^2), where n is the length of the input array nums. The outer loop runs in O(n) time, and the inner while loop runs in O(n) time in the worst case. Sorting the array takes O(n log n) time, but since it is dominated by the nested loops, the overall time complexity is O(n^2).

// Space Complexity: The space complexity of this algorithm is O(1) because it uses a constant amount of extra space to store variables (closestSum, left, right) and does not depend on the input size.
