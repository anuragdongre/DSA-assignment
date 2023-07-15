class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeSortedLists(a, b) {
    if (a === null) {
      return b; // Return list B if list A is empty
    }
    if (b === null) {
      return a; // Return list A if list B is empty
    }
  
    let dummy = new Node(0); // Dummy node as the head of the merged list
    let prev = dummy;
    let currA = a;
    let currB = b;
  
    while (currA !== null && currB !== null) {
      if (currA.data <= currB.data) {
        prev.next = currA;
        currA = currA.next;
      } else {
        prev.next = currB;
        currB = currB.next;
      }
      prev = prev.next;
    }
  
    if (currA !== null) {
      prev.next = currA; // Append remaining nodes in list A
    }
    if (currB !== null) {
      prev.next = currB; // Append remaining nodes in list B
    }
  
    return dummy.next; // Return the head of the merged list
  }
  
  // Example usage:
  // List A: 5->10->15
  let a = new Node(5);
  a.next = new Node(10);
  a.next.next = new Node(15);
  
  // List B: 2->3->20
  let b = new Node(2);
  b.next = new Node(3);
  b.next.next = new Node(20);
  
  let mergedHead = mergeSortedLists(a, b);
  
  // Print the merged list
  let curr = mergedHead;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  