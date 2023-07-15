function calculateProduct(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
  // Example usage
  var arr1 = [1, 2, 3, 4, 5];
  console.log(calculateProduct(arr1));  // Output: 120
  
  var arr2 = [1, 6, 3];
  console.log(calculateProduct(arr2));  // Output: 18
  