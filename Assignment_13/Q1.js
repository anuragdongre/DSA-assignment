class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function createNewList(list1, list2) {
    let list1Ptr = list1;
    let list2Ptr = list2;
    let newListHead = null;
    let newListPtr = null;
  
    while (list1Ptr !== null && list2Ptr !== null) {
      let newNode = null;
  
      if (list1Ptr.data > list2Ptr.data) {
        newNode = new Node(list1Ptr.data);
        list1Ptr = list1Ptr.next;
      } else {
        newNode = new Node(list2Ptr.data);
        list2Ptr = list2Ptr.next;
      }
  
      if (newListHead === null) {
        newListHead = newNode;
        newListPtr = newNode;
      } else {
        newListPtr.next = newNode;
        newListPtr = newListPtr.next;
      }
    }
  
    if (list1Ptr !== null) {
      newListPtr.next = list1Ptr;
    }
  
    if (list2Ptr !== null) {
      newListPtr.next = list2Ptr;
    }
  
    return newListHead;
  }
  
  // Example usage:
  // list1: 5->2->3->8
  let list1 = new Node(5);
  list1.next = new Node(2);
  list1.next.next = new Node(3);
  list1.next.next.next = new Node(8);
  
  // list2: 1->7->4->5
  let list2 = new Node(1);
  list2.next = new Node(7);
  list2.next.next = new Node(4);
  list2.next.next.next = new Node(5);
  
  let newListHead = createNewList(list1, list2);
  
  // Print the new list
  let curr = newListHead;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  