class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.bottom = null;
    }
  }
  
  function mergeLists(list1, list2) {
    let dummy = new Node(0);
    let tail = dummy;
  
    while (list1 !== null && list2 !== null) {
      if (list1.data <= list2.data) {
        tail.bottom = list1;
        list1 = list1.bottom;
      } else {
        tail.bottom = list2;
        list2 = list2.bottom;
      }
      tail = tail.bottom;
    }
  
    if (list1 !== null) {
      tail.bottom = list1;
    } else {
      tail.bottom = list2;
    }
  
    return dummy.bottom;
  }
  
  function flattenLinkedList(head) {
    if (head === null || head.next === null) {
      return head; // Return the list as it is if empty or has only one node
    }
  
    // Recursively flatten the sublist pointed by the bottom pointer
    head.next = flattenLinkedList(head.next);
  
    // Merge the flattened sublist with the remaining part of the linked list
    head = mergeLists(head, head.next);
  
    return head;
  }
  
  // Example usage:
  // Linked List: 5 -> 10 -> 19 -> 28
  //               |     |     |
  //               7     20    22
  //               |           |
  //               8           50
  //               |                 |
  //               30               45
  let head = new Node(5);
  let node1 = new Node(10);
  let node2 = new Node(19);
  let node3 = new Node(28);
  let node4 = new Node(7);
  let node5 = new Node(20);
  let node6 = new Node(22);
  let node7 = new Node(35);
  let node8 = new Node(8);
  let node9 = new Node(50);
  let node10 = new Node(40);
  let node11 = new Node(30);
  let node12 = new Node(45);
  
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  
  head.bottom = node4;
  node4.bottom = node8;
  node8.bottom = node11;
  
  node1.bottom = node5;
  node5.bottom = node9;
  
  node2.bottom = node6;
  
  node3.bottom = node7;
  node7.bottom = node10;
  node10.bottom = node12;
  
  head = flattenLinkedList(head);
  
  // Print the flattened linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.bottom;
  }
  