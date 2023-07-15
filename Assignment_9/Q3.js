function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      var fact = 1;
      for (var i = 2; i <= n; i++) {
        fact *= i;
      }
      return fact;
    }
  }
  
  // Example usage
  console.log(factorial(5));  // Output: 120
  console.log(factorial(4));  // Output: 24
  