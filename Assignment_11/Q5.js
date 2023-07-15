function intersection(nums1, nums2) {
    var set = new Set();
    var result = [];
  
    for (var num of nums1) {
      set.add(num);
    }
  
    for (var num of nums2) {
      if (set.has(num)) {
        result.push(num);
        set.delete(num); // To ensure uniqueness in the result
      }
    }
  
    return result;
  }
  
  // Example usage
  console.log(intersection([1, 2, 2, 1], [2, 2]));               // Output: [2]
  console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));        // Output: [9, 4]
  console.log(intersection([1, 2, 3], [4, 5, 6]));             // Output: []
  console.log(intersection([1, 2, 3], [1, 2, 3, 4, 5, 6]));    // Output: [1, 2, 3]
  