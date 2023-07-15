function majorityElement(nums) {
    let candidate;
    let count = 0;
  
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += num === candidate ? 1 : -1;
    }
  
    count = 0;
    for (let num of nums) {
      if (num === candidate) {
        count++;
      }
    }
  
    return count > Math.floor(nums.length / 2) ? candidate : null;
  }
  
  // Example usage
  console.log(majorityElement([3, 2, 3])); // Output: 3
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
  