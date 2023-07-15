function findDuplicate(nums) {
    var slow = nums[0];
    var fast = nums[0];
  
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    var ptr1 = nums[0];
    var ptr2 = slow;
  
    while (ptr1 !== ptr2) {
      ptr1 = nums[ptr1];
      ptr2 = nums[ptr2];
    }
  
    return ptr1;
  }
  
  // Example usage
  console.log(findDuplicate([1, 3, 4, 2, 2]));  // Output: 2
  console.log(findDuplicate([3, 1, 3, 4, 2]));  // Output: 3
  