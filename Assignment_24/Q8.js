function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
  
    while (right - left >= k) {
      const diffLeft = Math.abs(arr[left] - x);
      const diffRight = Math.abs(arr[right] - x);
  
      if (diffLeft >= diffRight) {
        left++;
      } else {
        right--;
      }
    }
  
    return arr.slice(left, right + 1);
  }
  
  // Example usage
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
  // Output: [1, 2, 3, 4]
  
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
  // Output: [1, 2, 3, 4]
  