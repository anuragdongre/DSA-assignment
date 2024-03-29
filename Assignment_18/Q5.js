const containsDuplicate = (nums) => {
    const seen = new Set();
    
    for (const num of nums) {
      if (seen.has(num)) {
        return true; // Duplicate value found
      }
      
      seen.add(num);
    }
    
    return false; // No duplicate value found
  };
  
  // Example usage:
  console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
  console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
  