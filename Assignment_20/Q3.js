function representsBSTLevelOrder(arr) {
    const n = arr.length;
    let i = 0;
  
    for (i = 1; i < n; i++) {
      if (arr[i] > arr[0]) {
        break;
      }
    }
  
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[0]) {
        return false;
      }
    }
  
    const leftStack = [arr[0]];
    const rightStack = [];
  
    for (let j = 1; j < n; j++) {
      if (arr[j] < leftStack[leftStack.length - 1]) {
        leftStack.push(arr[j]);
      } else {
        while (
          rightStack.length > 0 &&
          arr[j] > rightStack[rightStack.length - 1]
        ) {
          if (rightStack.pop() < leftStack[leftStack.length - 1]) {
            return false;
          }
        }
        rightStack.push(arr[j]);
      }
    }
  
    return true;
  }
  
  // Example usage
  const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const result1 = representsBSTLevelOrder(arr1);
  console.log(result1);
  
  const arr2 = [11, 6, 13, 5, 12, 10];
  const result2 = representsBSTLevelOrder(arr2);
  console.log(result2);
  