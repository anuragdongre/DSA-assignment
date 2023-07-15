class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.random = null;
    }
  }
  
  function cloneLinkedList(head) {
    if (head === null) {
      return null; // Return null if the original list is empty
    }
  
    let curr = head;
    let cloneMap = new Map(); // Mapping between original nodes and their corresponding new nodes
  
    // Step 1: Create new nodes for each node in the original list
    while (curr !== null) {
      let cloneNode = new Node(curr.data);
      cloneMap.set(curr, cloneNode);
      curr = curr.next;
    }
  
    curr = head;
  
    // Step 2 and 3: Set next and random pointers of the new nodes
    while (curr !== null) {
      let cloneNode = cloneMap.get(curr);
      cloneNode.next = cloneMap.get(curr.next);
      cloneNode.random = cloneMap.get(curr.random);
      curr = curr.next;
    }
  
    // Return the head of the new linked list
    return cloneMap.get(head);
  }
  
  // Example usage:
  // Linked List: 1 -> 2 -> 3 -> 4
  //               |    |
  //               2    4
  let head = new Node(1);
  let node1 = new Node(2);
  let node2 = new Node(3);
  let node3 = new Node(4);
  
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  
  head.random = node1;
  node1.random = node3;
  
  let clonedHead = cloneLinkedList(head);
  
  // Print the cloned linked list
  let curr = clonedHead;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  