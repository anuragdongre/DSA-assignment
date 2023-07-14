function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
  
      if (c === '(' || c === '*') {
        stack.push(c);
      } else if (c === ')') {
        if (stack.length > 0 && (stack[stack.length - 1] === '(' || stack[stack.length - 1] === '*')) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    let openCount = 0;
  
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === '(') {
        openCount++;
      } else if (stack[i] === '*') {
        if (openCount > 0) {
          openCount--;
        }
      } else {
        return false;
      }
    }
  
    return true;
  }
  