function intersect(nums1, nums2) {
    const intersection = [];
    const frequencyMap = new Map();
  
    // Create frequency map for nums1
    for (const num of nums1) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    // Find common elements in nums2
    for (const num of nums2) {
      if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
        intersection.push(num);
        frequencyMap.set(num, frequencyMap.get(num) - 1);
      }
    }
  
    return intersection;
  }
  
  // Example usage
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const result1 = intersect(nums1, nums2);
  console.log(result1);
  
  const nums3 = [4, 9, 5];
  const nums4 = [9, 4, 9, 8, 4];
  const result2 = intersect(nums3, nums4);
  console.log(result2);
  