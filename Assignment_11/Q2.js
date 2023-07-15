function findPeakElement(nums) {
    var left = 0;
    var right = nums.length - 1;
  
    while (left < right) {
      var mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Example usage
  console.log(findPeakElement([1, 2, 3, 1]));         // Output: 2
  console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));  // Output: 5
  console.log(findPeakElement([1, 2, 3, 4, 5]));       // Output: 4
  