function printPermutations(str) {
    var result = [];
    backtrack(str.split(''), 0, result);
    return result;
  }
  
  function backtrack(arr, start, result) {
    if (start === arr.length - 1) {
      result.push(arr.join(''));
      return;
    }
  
    for (var i = start; i < arr.length; i++) {
      swap(arr, start, i);
      backtrack(arr, start + 1, result);
      swap(arr, start, i); // backtrack (undo the swap)
    }
  }
  
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Example usage
  console.log(printPermutations("cd"));   // Output: ['cd', 'dc']
  console.log(printPermutations("abb"));  // Output: ['abb', 'bab', 'bba', 'abb', 'bba', 'bab']
  