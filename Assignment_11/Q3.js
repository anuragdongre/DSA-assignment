function findMissingNumber(nums) {
    var n = nums.length;
    var totalSum = (n * (n + 1)) / 2;
    var arraySum = nums.reduce((sum, num) => sum + num, 0);
  
    return totalSum - arraySum;
  }
  
  // Example usage
  console.log(findMissingNumber([3, 0, 1]));  // Output: 2
  console.log(findMissingNumber([0, 1]));     // Output: 2
  