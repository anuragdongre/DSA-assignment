class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function flipBinaryTree(root) {
    if (root === null || (root.left === null && root.right === null)) {
      return root;
    }
  
    const flippedLeft = flipBinaryTree(root.left);
    const flippedRight = flipBinaryTree(root.right);
  
    root.left = flippedRight;
    root.right = flippedLeft;
  
    return root;
  }
  
  // Example usage
  // Construct the binary tree from the example
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  
  const flippedRoot = flipBinaryTree(root);
  
  // Print the flipped binary tree in pre-order traversal
  function printPreOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.val);
    printPreOrder(root.left);
    printPreOrder(root.right);
  }
  
  printPreOrder(flippedRoot);
  