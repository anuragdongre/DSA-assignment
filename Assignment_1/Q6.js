// Q6

// Algorithm

// nitialize an empty set.
// Iterate through each element num in the nums array.
// If num is already present in the set, return true as there is a duplicate element.
// Otherwise, add num to the set.
// If the loop completes without finding any duplicate elements, return false.

// The time complexity of this algorithm is O(n), where n is the length of the nums array, as we iterate through each element once and the operations on the set take constant time on average.

function containsDuplicate(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

//   example

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true
