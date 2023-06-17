// Initialize a variable result to 0.
// Iterate through each element in the array.
// For each element, perform the XOR operation between result and the current element.
// After iterating through all the elements, the value of result will be the single element that appears only once.

function singleNumber(nums) {
    let result = 0;
  
    for (let num of nums) {
      result = result ^ num;
    }
  
    return result;
  }
  
  // Test case
  const nums = [2, 2, 1];
  console.log(singleNumber(nums));  // Output: 1

  

//   The time complexity of this algorithm is O(n), where n is the number of elements in the input array. The space complexity is O(1) since we are using only a constant amount of extra memory for the result variable.
