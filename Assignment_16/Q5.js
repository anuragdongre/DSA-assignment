function reverseNumber(num) {
    const numStr = String(num);
    const stack = [];
  
    for (let digit of numStr) {
      stack.push(digit);
    }
  
    let reversedNumStr = "";
    while (stack.length > 0) {
      reversedNumStr += stack.pop();
    }
  
    const reversedNum = parseInt(reversedNumStr);
    return reversedNum;
  }
  
  // Example usage:
  const num1 = 365;
  console.log(reverseNumber(num1)); // Output: 563
  
  const num2 = 6899;
  console.log(reverseNumber(num2)); // Output: 9986
  