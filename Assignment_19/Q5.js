function rearrangeAlternate(arr) {
    const positiveArr = [];
    const negativeArr = [];
  
    // Separate positive and negative numbers
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        positiveArr.push(arr[i]);
      } else {
        negativeArr.push(arr[i]);
      }
    }
  
    let i = 0, j = 0, k = 0;
    const positiveLen = positiveArr.length;
    const negativeLen = negativeArr.length;
  
    // Arrange positive and negative numbers alternately
    while (i < positiveLen && j < negativeLen) {
      if (k % 2 === 0) {
        arr[k] = negativeArr[j];
        j++;
      } else {
        arr[k] = positiveArr[i];
        i++;
      }
      k++;
    }
  
    // Append remaining positive numbers
    while (i < positiveLen) {
      arr[k] = positiveArr[i];
      i++;
      k++;
    }
  
    // Append remaining negative numbers
    while (j < negativeLen) {
      arr[k] = negativeArr[j];
      j++;
      k++;
    }
  
    return arr;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, -4, -1, 4];
  const result1 = rearrangeAlternate(arr1);
  console.log(result1);
  
  const arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
  const result2 = rearrangeAlternate(arr2);
  console.log(result2);
  