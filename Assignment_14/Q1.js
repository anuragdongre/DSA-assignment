class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function detectAndRemoveLoop(head) {
    if (head === null || head.next === null) {
      return head; // Return the list as it is if it is empty or has only one node
    }
  
    let slow = head;
    let fast = head;
  
    // Detect the loop
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        break;
      }
    }
  
    // If no loop is found
    if (slow !== fast) {
      return head;
    }
  
    // Find the starting point of the loop
    slow = head;
    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Remove the loop
    fast.next = null;
  
    return head;
  }
  
  // Example usage:
  // LinkedList: 1 -> 3 -> 4
  //             ^         |
  //             |_________|
  let head = new Node(1);
  let node1 = new Node(3);
  let node2 = new Node(4);
  
  head.next = node1;
  node1.next = node2;
  node2.next = node1; // Creating a loop
  
  head = detectAndRemoveLoop(head);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  