class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function getNthNodeFromEnd(head, N) {
    let first = head;
    let second = head;
  
    // Move the first pointer N nodes ahead
    for (let i = 0; i < N; i++) {
      if (first === null) {
        return -1; // N is greater than the number of nodes
      }
      first = first.next;
    }
  
    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
  
    return second !== null ? second.data : -1;
  }
  
  // Example usage:
  // LinkedList: 1->2->3->4->5->6->7->8->9
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  head.next.next.next.next.next.next.next.next = new Node(9);
  
  console.log(getNthNodeFromEnd(head, 2)); // Output: 8
  
  // LinkedList: 10->5->100->5
  head = new Node(10);
  head.next = new Node(5);
  head.next.next = new Node(100);
  head.next.next.next = new Node(5);
  
  console.log(getNthNodeFromEnd(head, 5)); // Output: -1
  