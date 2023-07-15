class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function inorderTraversal(root, result) {
    if (root === null) {
      return;
    }
  
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
  }
  
  function convertToBST(root, sortedValues, index) {
    if (root === null) {
      return;
    }
  
    convertToBST(root.left, sortedValues, index);
  
    root.val = sortedValues[index.value];
    index.value++;
  
    convertToBST(root.right, sortedValues, index);
  }
  
  function binaryTreeToBST(root) {
    if (root === null) {
      return null;
    }
  
    const sortedValues = [];
    inorderTraversal(root, sortedValues);
    sortedValues.sort((a, b) => a - b);
  
    const index = { value: 0 };
    convertToBST(root, sortedValues, index);
  
    return root;
  }
  
  // Example usage
  // Construct the binary tree from the example
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  const result = binaryTreeToBST(root);
  console.log(result);
  