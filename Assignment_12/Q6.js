class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function retainMDeleteN(head, M, N) {
    let current = head;
    let prev = null;
  
    while (current !== null) {
      // Retain M nodes
      for (let i = 0; i < M - 1 && current !== null; i++) {
        current = current.next;
      }
  
      if (current === null) {
        break;
      }
  
      // Set prev as current
      prev = current;
  
      // Delete N nodes
      for (let i = 0; i < N && current !== null; i++) {
        current = current.next;
      }
  
      // Update the next pointer of prev
      prev.next = current;
    }
  
    return head;
  }
  
  // Example usage:
  // Input: M = 2, N = 2, Linked List: 1->2->3->4->5->6->7->8
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  
  head = retainMDeleteN(head, 2, 2);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  