function intersect(nums1, nums2) {
    var map = new Map();
    var result = [];
  
    // Store the frequency of each element in nums1
    for (var num of nums1) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  
    // Iterate over nums2 and check for intersection
    for (var num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
  
    return result;
  }
  
  // Example usage
  console.log(intersect([1, 2, 2, 1], [2, 2]));               // Output: [2, 2]
  console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));        // Output: [9, 4]
  console.log(intersect([1, 2, 3], [4, 5, 6]));             // Output: []
  console.log(intersect([1, 2, 3], [1, 2, 3, 4, 5, 6]));    // Output: [1, 2, 3]
  