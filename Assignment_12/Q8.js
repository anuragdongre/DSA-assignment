class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function isCircular(head) {
    if (head === null) {
      return false; // An empty list is not circular
    }
  
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
  // Circular Linked List: 1->2->3->4->5->1 (1 points back to the head)
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = head;
  
  console.log(isCircular(head)); // Output: true
  
  // Non-circular Linked List: 1->2->3->4->5
  head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  console.log(isCircular(head)); // Output: false
  