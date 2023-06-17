// Create distinctNums1 and distinctNums2 sets from nums1 and nums2 respectively.
// Use the filter method along with the negation of distinctNums2.has(num) to find the elements in nums1 that are not present in nums2 and store them in the notInNums2 array.
// Similarly, use the filter method along with the negation of distinctNums1.has(num) to find the elements in nums2 that are not present in nums1 and store them in the notInNums1 array.
// Return the array [notInNums1, notInNums2] as the result.

function findDisjoint(nums1, nums2) {
    const distinctNums1 = new Set(nums1);
    const distinctNums2 = new Set(nums2);
  
    const notInNums2 = [...distinctNums1].filter(num => !distinctNums2.has(num));
    const notInNums1 = [...distinctNums2].filter(num => !distinctNums1.has(num));
  
    return [notInNums1, notInNums2];
  }
  
  // Test case
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  console.log(findDisjoint(nums1, nums2));

  
//   The time complexity of this algorithm is O(n), where n is the total number of elements in nums1 and nums2, as we iterate through the arrays once to create the sets. The space complexity is O(m + k), where m and k are the number of distinct elements in nums1 and nums2 respectively, as we store the distinct elements in sets and the result arrays.

