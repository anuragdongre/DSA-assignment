class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function constructBST(levelOrder) {
    if (levelOrder.length === 0) {
      return null;
    }
  
    const root = new TreeNode(levelOrder[0]);
    const queue = [root];
    let i = 1;
  
    while (i < levelOrder.length) {
      const currentNode = queue.shift();
  
      const leftValue = levelOrder[i];
      if (leftValue !== null && leftValue !== undefined) {
        const leftNode = new TreeNode(leftValue);
        currentNode.left = leftNode;
        queue.push(leftNode);
      }
      i++;
  
      if (i < levelOrder.length) {
        const rightValue = levelOrder[i];
        if (rightValue !== null && rightValue !== undefined) {
          const rightNode = new TreeNode(rightValue);
          currentNode.right = rightNode;
          queue.push(rightNode);
        }
        i++;
      }
    }
  
    return root;
  }
  
  // Example usage
  const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const root = constructBST(levelOrder);
  console.log(root);
  