class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function findLCA(root, node1, node2) {
    if (root === null) {
      return null;
    }
  
    if (root.val > node1 && root.val > node2) {
      return findLCA(root.left, node1, node2);
    }
  
    if (root.val < node1 && root.val < node2) {
      return findLCA(root.right, node1, node2);
    }
  
    return root;
  }
  
  function findDistance(root, node, distance) {
    if (root === null) {
      return -1;
    }
  
    if (root.val === node) {
      return distance;
    }
  
    const leftDistance = findDistance(root.left, node, distance + 1);
    if (leftDistance !== -1) {
      return leftDistance;
    }
  
    const rightDistance = findDistance(root.right, node, distance + 1);
    if (rightDistance !== -1) {
      return rightDistance;
    }
  
    return -1;
  }
  
  function distanceBetweenNodes(root, node1, node2) {
    const lca = findLCA(root, node1, node2);
    const distance1 = findDistance(lca, node1, 0);
    const distance2 = findDistance(lca, node2, 0);
  
    return distance1 + distance2;
  }
  
  // Example usage
  // Construct the BST from the example
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right = new TreeNode(10);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  const node1 = 6;
  const node2 = 14;
  const result1 = distanceBetweenNodes(root, node1, node2);
  console.log(result1);
  
  const node3 = 3;
  const node4 = 4;
  const result2 = distanceBetweenNodes(root, node3, node4);
  console.log(result2);
  