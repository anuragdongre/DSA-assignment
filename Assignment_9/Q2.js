function sumOfFirstNNumbers(n) {
    var sum = (n / 2) * (1 + n);
    return Math.floor(sum);
  }
  
  // Example usage
  console.log(sumOfFirstNNumbers(3));  // Output: 6
  console.log(sumOfFirstNNumbers(5));  // Output: 15
  