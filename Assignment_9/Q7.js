function permuteString(str) {
    var results = [];
    backtrack(str, '', results);
    return results;
  }
  
  function backtrack(str, currentPerm, results) {
    if (str.length === 0) {
      results.push(currentPerm);
      return;
    }
  
    for (var i = 0; i < str.length; i++) {
      var newStr = str.substring(0, i) + str.substring(i + 1);
      var newPerm = currentPerm + str.charAt(i);
      backtrack(newStr, newPerm, results);
    }
  }
  
  // Example usage
  var input1 = "ABC";
  console.log(permuteString(input1));  // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
  
  var input2 = "XY";
  console.log(permuteString(input2));  // Output: ["XY", "YX"]
  