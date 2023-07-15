function pushZerosToEnd(arr) {
    let count = 0;
  
    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[count] = arr[i];
        count++;
      }
    }
  
    // Fill the remaining elements with zeros
    while (count < arr.length) {
      arr[count] = 0;
      count++;
    }
  
    return arr;
  }
  
  // Example usage
  const arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
  const result = pushZerosToEnd(arr);
  console.log(result);
  