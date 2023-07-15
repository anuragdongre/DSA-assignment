class Node {
    constructor(val, left = null, right = null, next = null) {
      this.val = val;
      this.left = left;
      this.right = right;
      this.next = next;
    }
  }
  
  function connectNodes(root) {
    if (root === null || root.next !== null) {
      return;
    }
  
    if (root.right !== null) {
      if (root.next !== null) {
        root.right.next = root.next.left;
      } else {
        root.right.next = null;
      }
    }
  
    if (root.left !== null) {
      root.left.next = root.right;
    }
  
    connectNodes(root.right);
    connectNodes(root.left);
  }
  
  function connectNodesAtSameLevel(root) {
    if (root === null) {
      return null;
    }
  
    root.next = null;
    let levelNode = root;
  
    while (levelNode !== null) {
      let currentNode = levelNode;
  
      while (currentNode !== null) {
        if (currentNode.left !== null) {
          if (currentNode.right !== null) {
            currentNode.left.next = currentNode.right;
          } else {
            currentNode.left.next = findNextRight(currentNode);
          }
        }
  
        if (currentNode.right !== null) {
          currentNode.right.next = findNextRight(currentNode);
        }
  
        currentNode = currentNode.next;
      }
  
      if (levelNode.left !== null) {
        levelNode = levelNode.left;
      } else if (levelNode.right !== null) {
        levelNode = levelNode.right;
      } else {
        levelNode = findNextRight(levelNode);
      }
    }
  
    return root;
  }
  
  function findNextRight(node) {
    let temp = node.next;
  
    while (temp !== null) {
      if (temp.left !== null) {
        return temp.left;
      }
      if (temp.right !== null) {
        return temp.right;
      }
      temp = temp.next;
    }
  
    return null;
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
  
  const result = connectNodesAtSameLevel(root);
  
  // Print the connected nodes
  let current = result;
  while (current !== null) {
    let temp = current;
    let connectedNodes = "";
    while (temp !== null) {
      connectedNodes += temp.val + " → ";
      temp = temp.next;
    }
    connectedNodes += "-1";
    console.log(connectedNodes);
    current = current.left;
  }
  