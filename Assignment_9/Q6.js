function findNthTerm(a, d, N) {
    var nthTerm = a + (N - 1) * d;
    return nthTerm;
  }
  
  // Example usage
  console.log(findNthTerm(2, 1, 5));  // Output: 6
  console.log(findNthTerm(5, 2, 10)); // Output: 23
  