function countConsonants(str) {
    var consonantCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
        consonantCount++;
      }
    }
  
    return consonantCount;
  }
  
  // Example usage
  console.log(countConsonants("abc de"));                  // Output: 3
  console.log(countConsonants("geeksforgeeks portal"));    // Output: 12
  