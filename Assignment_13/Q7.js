class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function reverseDoublyLinkedList(head) {
    if (head === null || head.next === null) {
      return head; // Return the list as it is if empty or has only one node
    }
  
    let current = head;
    let temp = null;
  
    while (current !== null) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      head = current; // Update the head to the last node encountered during traversal
      current = temp;
    }
  
    return head;
  }
  
  // Example usage:
  // Original Doubly Linked List: 10 <-> 8 <-> 4 <-> 2
  let head = new Node(10);
  let node1 = new Node(8);
  let node2 = new Node(4);
  let node3 = new Node(2);
  
  head.next = node1;
  node1.prev = head;
  node1.next = node2;
  node2.prev = node1;
  node2.next = node3;
  node3.prev = node2;
  
  head = reverseDoublyLinkedList(head);
  
  // Print the reversed doubly linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  