class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  function deleteNodeFromPosition(head, position) {
    if (head === null) {
      return head; // Return the list as it is if it is empty
    }
  
    if (position === 1) {
      head = head.next;
      if (head !== null) {
        head.prev = null;
      }
      return head;
    }
  
    let current = head;
    let count = 1;
  
    while (current !== null && count < position) {
      current = current.next;
      count++;
    }
  
    if (current === null) {
      return head; // Return the list as it is if position is greater than the list size
    }
  
    current.prev.next = current.next;
  
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
  
    return head;
  }
  
  // Example usage:
  // LinkedList: 1 <-> 3 <-> 4
  let head = new Node(1);
  let node1 = new Node(3);
  let node2 = new Node(4);
  
  head.next = node1;
  node1.prev = head;
  node1.next = node2;
  node2.prev = node1;
  
  let position = 3;
  head = deleteNodeFromPosition(head, position);
  
  // Print the modified doubly linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  