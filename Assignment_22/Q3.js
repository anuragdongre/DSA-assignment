class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function printRootToLeafPaths(root) {
    if (root === null) {
      return;
    }
  
    const stack = [root];
    const pathStack = [root.val.toString()];
  
    while (stack.length > 0) {
      const node = stack.pop();
      const path = pathStack.pop();
  
      if (node.left === null && node.right === null) {
        console.log(path);
      }
  
      if (node.right !== null) {
        stack.push(node.right);
        pathStack.push(path + "->" + node.right.val.toString());
      }
  
      if (node.left !== null) {
        stack.push(node.left);
        pathStack.push(path + "->" + node.left.val.toString());
      }
    }
  }
  
  // Example usage
  // Construct the binary tree from the example
  const root = new Node(6);
  root.left = new Node(3);
  root.right = new Node(5);
  root.left.left = new Node(2);
  root.left.right = new Node(5);
  root.right.right = new Node(4);
  root.left.right.left = new Node(7);
  root.left.right.right = new Node(4);
  
  printRootToLeafPaths(root);
  