function findDisjointElements(nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();
  
    for (const num of nums1) {
      set1.add(num);
    }
  
    for (const num of nums2) {
      set2.add(num);
    }
  
    const result1 = [];
    const result2 = [];
  
    for (const num of set1) {
      if (!set2.has(num)) {
        result1.push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        result2.push(num);
      }
    }
  
    return [result1, result2];
  }
  