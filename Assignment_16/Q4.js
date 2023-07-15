function checkIncreasingOrder(queue) {
    const stack = [];
    const secondQueue = [];
    let expectedElement = 1;
  
    while (queue.length > 0) {
      const currentElement = queue.shift();
  
      if (currentElement === expectedElement) {
        secondQueue.push(currentElement);
        expectedElement++;
      } else if (stack.length > 0 && stack[stack.length - 1] === expectedElement) {
        secondQueue.push(stack.pop());
        expectedElement++;
        queue.unshift(currentElement); // Revisit the current element
      } else {
        stack.push(currentElement);
      }
    }
  
    while (stack.length > 0) {
      const topElement = stack.pop();
  
      if (topElement === expectedElement) {
        secondQueue.push(topElement);
        expectedElement++;
      } else {
        return "No";
      }
    }
  
    for (let i = 0; i < secondQueue.length; i++) {
      if (secondQueue[i] !== i + 1) {
        return "No";
      }
    }
  
    return "Yes";
  }
  
  // Example usage:
  const queue1 = [5, 1, 2, 3, 4];
  console.log(checkIncreasingOrder(queue1)); // Output: Yes
  
  const queue2 = [5, 1, 2, 6, 3, 4];
  console.log(checkIncreasingOrder(queue2)); // Output: No
  