function lastRemaining(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
      arr.push(i);
    }
    
    var leftToRight = true;
    while (arr.length > 1) {
      if (leftToRight) {
        arr = arr.filter((_, index) => index % 2 === 1);
      } else {
        arr = arr.filter((_, index) => index % 2 === 0);
      }
      leftToRight = !leftToRight;
    }
    
    return arr[0];
  }
  
  // Example usage
  console.log(lastRemaining(9));  // Output: 6
  console.log(lastRemaining(1));  // Output: 1
  console.log(lastRemaining(5));  // Output: 4
  console.log(lastRemaining(2));  // Output: 2
  