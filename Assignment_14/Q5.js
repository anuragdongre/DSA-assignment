class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function groupNodes(head) {
    if (head === null || head.next === null) {
      return head; // Return the list as it is if empty or has only one node
    }
  
    let oddHead = head;
    let evenHead = head.next;
  
    let odd = oddHead;
    let even = evenHead;
  
    while (odd !== null && even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;
  
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead;
  
    return oddHead;
  }
  
  // Example usage:
  // Linked List: 1 -> 2 -> 3 -> 4 -> 5
  let head = new Node(1);
  let node1 = new Node(2);
  let node2 = new Node(3);
  let node3 = new Node(4);
  let node4 = new Node(5);
  
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  head = groupNodes(head);
  
  // Print the reordered linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  