class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
      this.prev = null;
      this.next = null;
    }
  }
  
  function convertToDLL(root) {
    if (root === null) {
      return null;
    }
  
    const leftDLL = convertToDLL(root.left);
    const rightDLL = convertToDLL(root.right);
  
    let leftTail = null;
    if (leftDLL !== null) {
      leftTail = leftDLL.prev;
      leftTail.next = root;
      root.prev = leftTail;
    }
  
    let rightHead = null;
    if (rightDLL !== null) {
      rightHead = rightDLL;
      rightHead.prev = root;
      root.next = rightHead;
    }
  
    const head = leftDLL !== null ? leftDLL : root;
    const tail = rightDLL !== null ? rightDLL.prev : root;
  
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
    current = current.next;
  }
  
  console.log(linkedListString.trim());
  