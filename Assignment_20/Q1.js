class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  let maxSum;
  
  function maxSubtreeSum(root) {
    if (root === null) {
      return 0;
    }
  
    const leftSum = maxSubtreeSum(root.left);
    const rightSum = maxSubtreeSum(root.right);
  
    const currentSum = root.val + leftSum + rightSum;
  
    maxSum = Math.max(maxSum, currentSum);
  
    return currentSum;
  }
  
  function maxSubtreeSumBinaryTree(root) {
    maxSum = Number.NEGATIVE_INFINITY;
    maxSubtreeSum(root);
    return maxSum;
  }
  
  // Example usage
  // Construct the binary tree from the example
  const root = new TreeNode(1);
  root.left = new TreeNode(-2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(-6);
  root.right.right = new TreeNode(2);
  
  const result = maxSubtreeSumBinaryTree(root);
  console.log(result);
  