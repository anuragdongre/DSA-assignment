function calculateStringLength(str) {
    if (str === '') {
      return 0;
    } else {
      return 1 + calculateStringLength(str.substring(1));
    }
  }
  
  // Example usage
  console.log(calculateStringLength("abcd"));            // Output: 4
  console.log(calculateStringLength("GEEKSFORGEEKS"));  // Output: 13
  console.log(calculateStringLength(""));                // Output: 0
  