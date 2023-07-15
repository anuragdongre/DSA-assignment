class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function removeDuplicates(head) {
    if (head === null || head.next === null) {
      return head; // Return the list as it is if it is empty or has only one node
    }
  
    let current = head;
  
    while (current !== null && current.next !== null) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
  }
  
  // Example usage:
  // LinkedList: 11->11->11->21->43->43->60
  let head = new Node(11);
  head.next = new Node(11);
  head.next.next = new Node(11);
  head.next.next.next = new Node(21);
  head.next.next.next.next = new Node(43);
  head.next.next.next.next.next = new Node(43);
  head.next.next.next.next.next.next = new Node(60);
  
  head = removeDuplicates(head);
  
  // Print the modified linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  