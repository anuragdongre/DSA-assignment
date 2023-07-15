class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function detectAndRemoveLoop(head) {
    let slowPtr = head;
    let fastPtr = head;
    let loopExists = false;
  
    // Detect loop using Floyd's Cycle-Finding Algorithm
    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
  
      if (slowPtr === fastPtr) {
        loopExists = true;
        break;
      }
    }
  
    if (loopExists) {
      // Move fastPtr back to the head and advance both pointers until they meet
      fastPtr = head;
      let prevPtr = null;
  
      while (slowPtr !== fastPtr) {
        prevPtr = slowPtr;
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
      }
  
      // Break the loop by setting the next pointer of the previous node to null
      prevPtr.next = null;
    }
  
    return head;
  }
  
  // Example usage:
  // Input: 1 -> 3 -> 4 -> 3 (loop)
  let head = new Node(1);
  let node2 = new Node(3);
  let node3 = new Node(4);
  let node4 = new Node(3);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2; // Creating a loop
  
  head = detectAndRemoveLoop(head);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  