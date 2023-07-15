const sortColors = (nums) => {
    let low = 0; // pointer for 0
    let mid = 0; // pointer for 1
    let high = nums.length - 1; // pointer for 2
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        // If the current element is 0, swap it with the element at the low pointer
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        // If the current element is 1, just move the mid pointer
        mid++;
      } else if (nums[mid] === 2) {
        // If the current element is 2, swap it with the element at the high pointer
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
      }
    }
  };
  
  // Example usage:
  const nums = [2, 0, 2, 1, 1, 0];
  sortColors(nums);
  console.log(nums); // Output: [0, 0, 1, 1, 2, 2]
  