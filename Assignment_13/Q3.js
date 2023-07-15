class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
  
    // Reverse the first k nodes
    while (current !== null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
  
    // Recursively reverse the remaining nodes
    if (next !== null) {
      head.next = reverseKNodes(next, k);
    }
  
    return prev; // New head of the reversed sublist
  }
  
  // Example usage:
  // LinkedList: 1->2->2->4->5->6->7->8
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(2);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  
  let k = 4;
  head = reverseKNodes(head, k);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  