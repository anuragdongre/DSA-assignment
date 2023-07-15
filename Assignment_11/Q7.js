function searchRange(nums, target) {
    var left = findIndex(nums, target, true);
    var right = findIndex(nums, target, false);
  
    return [left, right];
  }
  
  function findIndex(nums, target, isFirst) {
    var index = -1;
    var left = 0;
    var right = nums.length - 1;
  
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        index = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return index;
  }
  
  // Example usage
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8));   // Output: [3, 4]
  console.log(searchRange([5, 7, 7, 8, 8, 10], 6));   // Output: [-1, -1]
  