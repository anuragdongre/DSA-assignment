function countRemainingWords(words) {
    const stack = [];
  
    for (const word of words) {
      if (stack.length > 0 && stack[stack.length - 1] === word) {
        stack.pop(); // Destroy similar words
      } else {
        stack.push(word);
      }
    }
  
    return stack.length;
  }
  
  // Example usage:
  const words1 = ["ab", "aa", "aa", "bcd", "ab"];
  console.log(countRemainingWords(words1)); // Output: 3
  
  const words2 = ["tom", "jerry", "jerry", "tom"];
  console.log(countRemainingWords(words2)); // Output: 0
  