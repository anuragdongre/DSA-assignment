function decodeString(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      if (c === ']') {
        let decodedString = '';
  
        while (stack[stack.length - 1] !== '[') {
          decodedString = stack.pop() + decodedString;
        }
  
        stack.pop(); // Pop the opening bracket '['
        const repeatCount = Number(stack.pop()); // Pop the repeat count
  
        stack.push(decodedString.repeat(repeatCount)); // Repeat and push the decoded string
      } else {
        stack.push(c); // Push the character to the stack
      }
    }
  
    return stack.reverse().join(''); // Reverse the stack and concatenate the characters
  }
  