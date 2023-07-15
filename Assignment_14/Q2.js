class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function addOne(head) {
    let current = head;
    let lastNodeLessThan9 = null;
  
    // Find the rightmost node with a value less than 9
    while (current !== null) {
      if (current.data < 9) {
        lastNodeLessThan9 = current;
      }
      current = current.next;
    }
  
    // Increment the value of the rightmost node less than 9
    if (lastNodeLessThan9 !== null) {
      lastNodeLessThan9.data += 1;
      current = lastNodeLessThan9.next;
      while (current !== null) {
        current.data = 0; // Update all nodes to the right to have a value of 0
        current = current.next;
      }
    } else {
      // All nodes have a value of 9, so we need to add a new node with a value of 1
      let newNode = new Node(1);
      newNode.next = head;
      head = newNode;
      current = head.next;
      while (current !== null) {
        current.data = 0; // Update all nodes to have a value of 0
        current = current.next;
      }
    }
  
    return head;
  }
  
  // Example usage:
  // LinkedList: 4 -> 5 -> 6
  let head = new Node(4);
  let node1 = new Node(5);
  let node2 = new Node(6);
  
  head.next = node1;
  node1.next = node2;
  
  head = addOne(head);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  