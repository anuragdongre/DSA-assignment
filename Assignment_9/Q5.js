function findMax(arr, currentIndex, currentMax) {
    if (currentIndex === arr.length) {
      return currentMax;
    }
  
    if (arr[currentIndex] > currentMax) {
      currentMax = arr[currentIndex];
    }
  
    return findMax(arr, currentIndex + 1, currentMax);
  }
  
  var arr1 = [1, 4, 3, -5, -4, 8, 6];
  console.log(findMax(arr1, 0, arr1[0]));  // Output: 8
  
  var arr2 = [1, 4, 45, 6, 10, -8];
  console.log(findMax(arr2, 0, arr2[0]));  // Output: 45
  