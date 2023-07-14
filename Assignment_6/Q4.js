function findMaxLength(nums) {
    const sumMap = new Map();
    let sum = 0;
    let maxLen = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i] === 0 ? -1 : 1;
  
      if (sum === 0) {
        maxLen = i + 1;
      } else if (sumMap.has(sum)) {
        maxLen = Math.max(maxLen, i - sumMap.get(sum));
      } else {
        sumMap.set(sum, i);
      }
    }
  
    return maxLen;
  }
  