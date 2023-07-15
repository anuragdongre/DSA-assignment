function reverseStack(St) {
    if (St.length <= 1) {
      return; // Base case: stack is empty or contains only one element
    } else {
      const temp = St.pop(); // Pop the top element from the stack
      reverseStack(St); // Recursively reverse the remaining stack
      insertAtBottom(St, temp); // Insert the popped element at the bottom of the stack
    }
  }
  
  function insertAtBottom(St, val) {
    if (St.length === 0) {
      St.push(val); // Insert the value at the bottom of the empty stack
    } else {
      const temp = St.pop(); // Pop the top element from the stack
      insertAtBottom(St, val); // Recursively insert the value at the bottom
      St.push(temp); // Push back the popped element
    }
  }
  
  // Example usage:
  const St = [3, 2, 1, 7, 6];
  reverseStack(St);
  console.log(St); // Output: [6, 7, 1, 2, 3]
  