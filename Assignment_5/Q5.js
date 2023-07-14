function findDistanceValue(arr1, arr2, d) {
    let count = 0;
  
    for (const num1 of arr1) {
      let found = false;
  
      for (const num2 of arr2) {
        if (Math.abs(num1 - num2) <= d) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        count++;
      }
    }
  
    return count;
  }
  