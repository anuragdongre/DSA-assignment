//Q5

// Alogithem

// Initialize three pointers:
// p1 pointing to the last valid element of nums1 (at index m - 1).
// p2 pointing to the last valid element of nums2 (at index n - 1).
// p pointing to the last element of the merged array nums1 (at index m + n - 1).
// While both p1 and p2 are greater than or equal to 0, do the following:
// If the element at nums1[p1] is greater than the element at nums2[p2], assign nums1[p1] to nums1[p] and decrement p1 by 1.
// Otherwise, assign nums2[p2] to nums1[p] and decrement p2 by 1.
// Decrement p by 1.
// If there are any remaining elements in nums2, copy them to the beginning of nums1 starting from index 0 up to p2 + 1.
// Return nums1 as the merged and sorted array.

//The time complexity of this algorithm is O(m + n), where m and n are the lengths of nums1 and nums2 respectively. This is because we traverse both arrays once to merge them.

function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }

  return nums1;
}

//Example

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const result = merge(nums1, m, nums2, n);
console.log(result); // Output: [1, 2, 2, 3, 5, 6]
