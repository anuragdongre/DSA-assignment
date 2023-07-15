function sqrt(x) {
    if (x === 0 || x === 1) {
      return x;
    }
  
    var left = 1;
    var right = x;
  
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      var square = mid * mid;
  
      if (square === x) {
        return mid;
      } else if (square < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  // Example usage
  console.log(sqrt(4));   // Output: 2
  console.log(sqrt(9));   // Output: 3
  console.log(sqrt(16));  // Output: 4
  