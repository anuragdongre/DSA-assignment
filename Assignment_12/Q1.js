class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function deleteMiddleNode(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    let slowPtr = head;
    let fastPtr = head;
    let prevPtr = null;
  
    while (fastPtr !== null && fastPtr.next !== null) {
      fastPtr = fastPtr.next.next;
      prevPtr = slowPtr;
      slowPtr = slowPtr.next;
    }
  
    prevPtr.next = slowPtr.next;
    slowPtr = null;
  
    return head;
  }
  
  function printLinkedList(head) {
    let curr = head;
    while (curr) {
      process.stdout.write(curr.data + " ");
      curr = curr.next;
    }
    process.stdout.write("\n");
  }
  
  // Example usage:
  // LinkedList: 1->2->3->4->5
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  console.log("Input:");
  printLinkedList(head);
  
  head = deleteMiddleNode(head);
  
  console.log("Output:");
  printLinkedList(head);
  