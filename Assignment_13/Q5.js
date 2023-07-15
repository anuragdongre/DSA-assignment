class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function deleteLastOccurrence(head, key) {
    if (head === null) {
      return head; // Return null if the list is empty
    }
  
    let prev = null;
    let toDelete = null;
    let current = head;
  
    while (current !== null) {
      if (current.data === key) {
        toDelete = current;
      }
      prev = current;
      current = current.next;
    }
  
    if (toDelete === null) {
      return head; // Return the list as it is if the key is not found
    }
  
    if (toDelete === head) {
      return head.next; // Update the head to the next node if the key is found at the head
    }
  
    prev.next = toDelete.next; // Skip the toDelete node
  
    return head;
  }
  
  // Example usage:
  // LinkedList: 1->2->3->5->2->10
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(5);
  head.next.next.next.next = new Node(2);
  head.next.next.next.next.next = new Node(10);
  
  let key = 2;
  head = deleteLastOccurrence(head, key);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  