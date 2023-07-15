class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function hasLoop(head) {
    let slowPtr = head;
    let fastPtr = head;
  
    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
  
      if (slowPtr === fastPtr) {
        return true;
      }
    }
  
    return false;
  }
  
  // Example usage:
  // LinkedList: 1 -> 3 -> 4 -> 3 (loop)
  let head = new Node(1);
  let node2 = new Node(3);
  let node3 = new Node(4);
  let node4 = new Node(3);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2; // Creating a loop
  
  console.log(hasLoop(head)); // Output: true
  
  // LinkedList: 1 -> 8 -> 3 -> 4 (no loop)
  head = new Node(1);
  node2 = new Node(8);
  node3 = new Node(3);
  node4 = new Node(4);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  console.log(hasLoop(head)); // Output: false
  