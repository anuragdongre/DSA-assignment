function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage
  const arr1 = [1, 3, 4, 5];
  const arr2 = [2, 4, 6, 8];
  const result1 = mergeSortedArrays(arr1, arr2);
  console.log(result1);
  
  const arr3 = [5, 8, 9];
  const arr4 = [4, 7, 8];
  const result2 = mergeSortedArrays(arr3, arr4);
  console.log(result2);
  