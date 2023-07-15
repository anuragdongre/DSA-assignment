function countContiguousSubstrings(S) {
    var count = 0;
    for (var i = 0; i < S.length; i++) {
      for (var j = i; j < S.length; j++) {
        if (S[i] === S[j]) {
          count++;
        }
      }
    }
    return count;
  }
  
  // Example usage
  console.log(countContiguousSubstrings("abcab"));  // Output: 7
  console.log(countContiguousSubstrings("aba"));    // Output: 4
  