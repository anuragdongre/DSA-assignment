function deleteMiddle(stack) {
    const tempStack = [];
    let size = 0;
  
    // Calculate size and transfer elements to tempStack
    while (!isEmpty(stack)) {
      tempStack.push(stack.pop());
      size++;
    }
  
    const middleIndex = Math.floor(size / 2);
    let count = 0;
  
    // Transfer elements back to stack, skipping middle element
    while (!isEmpty(tempStack)) {
      if (count !== middleIndex) {
        stack.push(tempStack.pop());
      } else {
        tempStack.pop(); // Skip middle element
      }
      count++;
    }
  
    // Pop remaining elements from tempStack and push to stack
    while (!isEmpty(tempStack)) {
      stack.push(tempStack.pop());
    }
  }
  
  function isEmpty(stack) {
    return stack.length === 0;
  }
  
  // Example usage:
  const stack1 = [1, 2, 3, 4, 5];
  deleteMiddle(stack1);
  console.log(stack1);
  
  const stack2 = [1, 2, 3, 4, 5, 6];
  deleteMiddle(stack2);
  console.log(stack2);
  