function reverseString(S) {
    const stack = [];
    const n = S.length;
  
    // Push each character onto the stack
    for (let i = 0; i < n; i++) {
      stack.push(S[i]);
    }
  
    let result = '';
  
    // Pop each character from the stack and append it to result
    while (stack.length > 0) {
      result += stack.pop();
    }
  
    return result;
  }
  
  // Example usage:
  const S = "GeeksforGeeks";
  const reversedString = reverseString(S);
  console.log(reversedString);
  