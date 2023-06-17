// Start from the rightmost element of the array and search for the first pair of adjacent elements where the left element is smaller than the right element. Let's call the index of the left element i.

// If no such pair is found, the array is in descending order. In this case, reverse the entire array to obtain the lowest possible order and return it as the next permutation.

// If a pair is found at index i, we need to find the smallest element in the subarray to the right of i that is greater than the element at index i. Let's call the index of this element j.

// Swap the elements at indices i and j.

// Reverse the subarray to the right of i, i.e., from index i+1 to the end of the array.

// The resulting array is the next permutation.


function nextPermutation(nums) {
    let i = nums.length - 2;
  
    // Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i === -1) {
      // Array is in descending order, reverse it
      reverse(nums, 0, nums.length - 1);
    } else {
      let j = nums.length - 1;
  
      // Find the smallest element to the right of i that is greater than nums[i]
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
  
      // Swap nums[i] and nums[j]
      swap(nums, i, j);
  
      // Reverse the subarray to the right of i
      reverse(nums, i + 1, nums.length - 1);
    }
  
    return nums;
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  // Test case
  const nums = [1, 2, 3];
  console.log(nextPermutation(nums));  // Output: [1, 3, 2]
  

//   The time complexity of this algorithm is O(n), where n is the length of the input array. The space complexity is O(1) since we are using only a constant amount of extra memory for swapping elements.
