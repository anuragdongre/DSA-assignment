function findDuplicates(nums) {
    const result = [];
  
    for (const num of nums) {
      const index = Math.abs(num) - 1;
  
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      } else {
        result.push(Math.abs(num));
      }
    }
  
    return result;
  }
  