class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (head === null || k === 0) {
      return head; // Return the list as it is if empty or k = 0
    }
  
    let length = 1;
    let tail = head;
  
    // Find the length of the linked list and the tail node
    while (tail.next !== null) {
      tail = tail.next;
      length++;
    }
  
    k = k % length; // Wrap around if k >= length
  
    if (k === 0) {
      return head; // Return the list as it is if k = 0 after wrapping around
    }
  
    let count = 1;
    let newHead = head;
  
    // Find the kth node from the beginning of the linked list
    while (count < k) {
      newHead = newHead.next;
      count++;
    }
  
    // Set the new head of the shifted linked list
    let shiftedHead = newHead.next;
  
    // Connect the tail of the original linked list to the original head
    tail.next = head;
  
    // Set the next node of the original tail as null to make it the new tail of the shifted linked list
    newHead.next = null;
  
    return shiftedHead;
  }
  
  // Example usage:
  // Linked List: 2 -> 4 -> 7 -> 8 -> 9
  let head = new ListNode(2);
  let node1 = new ListNode(4);
  let node2 = new ListNode(7);
  let node3 = new ListNode(8);
  let node4 = new ListNode(9);
  
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  let k = 3;
  
  head = leftShiftLinkedList(head, k);
  
  // Print the shifted linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
  