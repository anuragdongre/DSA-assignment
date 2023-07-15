function evaluatePostfixExpression(S) {
    const stack = [];
  
    for (let i = 0; i < S.length; i++) {
      const ch = S[i];
  
      if (isOperand(ch)) {
        stack.push(Number(ch)); // Convert the character to a number and push it onto the stack
      } else if (isOperator(ch)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const result = performOperation(ch, operand1, operand2);
        stack.push(result);
      }
    }
  
    return stack.pop(); // Return the final result
  }
  
  function isOperand(ch) {
    return /^[0-9]$/.test(ch);
  }
  
  function isOperator(ch) {
    return /^[+\-*/]$/.test(ch);
  }
  
  function performOperation(operator, operand1, operand2) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return 0;
    }
  }
  
  // Example usage:
  const S = "231*+9-";
  const result = evaluatePostfixExpression(S);
  console.log(result);
  