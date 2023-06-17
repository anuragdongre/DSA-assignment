// Initialize three pointers i, j, and k to 0.
// Iterate until any of the pointers reaches the end of its respective array.
// Compare the elements at indices i, j, and k in arr1, arr2, and arr3 respectively.
// If all three elements are equal, it means we have found a common element. Add it to the common array and increment all pointers.
// If the elements are not equal, increment the pointer pointing to the smallest element.
// Repeat steps 3-5 until any of the pointers reaches the end of its array.
// Return the common array containing the common elements.

function commonElements(arr1, arr2, arr3) {
  let i = 0, j = 0, k = 0;
  const common = [];

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  return common;
}

// Test case
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
console.log(commonElements(arr1, arr2, arr3));

// The time complexity of this algorithm is O(n), where n is the total number of elements in the arrays, as we iterate through the arrays once simultaneously. The space complexity is O(1) as we only use a single array common to store the result, and its size is proportional to the number of common elements found.
