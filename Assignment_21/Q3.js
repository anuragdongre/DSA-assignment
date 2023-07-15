class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function convertToDLL(root) {
    if (root === null) {
      return { head: null, tail: null };
    }
  
    const { head: leftHead, tail: leftTail } = convertToDLL(root.left);
    const { head: rightHead, tail: rightTail } = convertToDLL(root.right);
  
    const newNode = new Node(root.val);
  
    if (leftHead !== null) {
      newNode.left = leftTail;
      leftTail.right = newNode;
    }
  
    if (rightHead !== null) {
      newNode.right = rightHead;
      rightHead.left = newNode;
    }
  
    const head = leftHead !== null ? leftHead : newNode;
    const tail = rightTail !== null ? rightTail : newNode;
  
    return { head, tail };
  }
  
  function convertBinaryTreeToDLL(root) {
    const { head, tail } = convertToDLL(root);
  
    // Adjust the head to the leftmost node
    let current = head;
    while (current.left !== null) {
      current = current.left;
    }
  
    return current;
  }
  
  // Example usage
  // Construct the binary tree from the example
  const root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(20);
  root.right.left = new Node(30);
  root.right.right = new Node(35);
  
  const result = convertBinaryTreeToDLL(root);
  
  // Print the doubly linked list
  let current = result;
  let linkedListString = "";
  while (current !== null) {
    linkedListString += current.val + " ";
    current = current.right;
  }
  
  console.log(linkedListString.trim());
  