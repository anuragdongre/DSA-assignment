const maximumGap = (nums) => {
    const n = nums.length;
    
    if (n < 2) {
      return 0; // Array contains less than 2 elements
    }
  
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    const gap = Math.max(1, Math.floor((maxNum - minNum) / (n - 1)));
    const bucketSize = Math.ceil((maxNum - minNum) / gap);
    
    const minBucket = new Array(bucketSize).fill(Number.MAX_SAFE_INTEGER);
    const maxBucket = new Array(bucketSize).fill(Number.MIN_SAFE_INTEGER);
  
    for (const num of nums) {
      const index = Math.floor((num - minNum) / gap);
      minBucket[index] = Math.min(minBucket[index], num);
      maxBucket[index] = Math.max(maxBucket[index], num);
    }
    
    let maxDifference = 0;
    let previousMax = minNum;
    
    for (let i = 0; i < bucketSize; i++) {
      if (minBucket[i] === Number.MAX_SAFE_INTEGER && maxBucket[i] === Number.MIN_SAFE_INTEGER) {
        continue; // Skip empty bucket
      }
      
      maxDifference = Math.max(maxDifference, minBucket[i] - previousMax);
      previousMax = maxBucket[i];
    }
    
    return maxDifference;
  };
  
  // Example usage:
  console.log(maximumGap([3, 6, 9, 1])); // Output: 3
  console.log(maximumGap([10])); // Output: 0
  