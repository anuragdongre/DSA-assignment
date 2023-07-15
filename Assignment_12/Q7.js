
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function insertAtAlternatePositions(firstHead, secondHead) {
    let firstCurr = firstHead;
    let secondCurr = secondHead;
  
    while (firstCurr !== null && secondCurr !== null) {
      let firstNext = firstCurr.next;
      let secondNext = secondCurr.next;
  
      secondCurr.next = firstNext;
      firstCurr.next = secondCurr;
  
      firstCurr = firstNext;
      secondCurr = secondNext;
    }
  
    // Append remaining nodes of the second list, if any
    if (secondCurr !== null) {
      firstCurr.next = secondCurr;
    }
  
    secondHead = null; // Empty the second list
  
    return firstHead;
  }
  
  // Example usage:
  // First list: 5->7->17->13->11
  let firstHead = new Node(5);
  firstHead.next = new Node(7);
  firstHead.next.next = new Node(17);
  firstHead.next.next.next = new Node(13);
  firstHead.next.next.next.next = new Node(11);
  
  // Second list: 12->10->2->4->6
  let secondHead = new Node(12);
  secondHead.next = new Node(10);
  secondHead.next.next = new Node(2);
  secondHead.next.next.next = new Node(4);
  secondHead.next.next.next.next = new Node(6);
  
  firstHead = insertAtAlternatePositions(firstHead, secondHead);
  
  // Print the modified first list
  let curr = firstHead;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
  