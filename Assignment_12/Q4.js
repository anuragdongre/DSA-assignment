class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (head === null || head.next === null) {
      return true; // An empty list or a list with a single node is considered a palindrome
    }
  
    let slowPtr = head;
    let fastPtr = head;
    let prevPtr = null;
  
    // Find the middle node and reverse the second half of the list
    while (fastPtr !== null && fastPtr.next !== null) {
      fastPtr = fastPtr.next.next;
      let nextNode = slowPtr.next;
      slowPtr.next = prevPtr;
      prevPtr = slowPtr;
      slowPtr = nextNode;
    }
  
    // If there are odd number of nodes, move slowPtr one step further
    if (fastPtr !== null) {
      slowPtr = slowPtr.next;
    }
  
    // Compare the first half with the reversed second half
    let firstHalf = head;
    let secondHalf = prevPtr;
  
    while (secondHalf !== null) {
      if (firstHalf.data !== secondHalf.data) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    // Restore the original linked list by reversing the second half back
    let curr = prevPtr;
    prevPtr = null;
    while (curr !== null) {
      let nextNode = curr.next;
      curr.next = prevPtr;
      prevPtr = curr;
      curr = nextNode;
    }
  
    return true;
  }
  
  // Example usage:
  // Input: R->A->D->A->R->NULL
  let head = new Node("R");
  head.next = new Node("A");
  head.next.next = new Node("D");
  head.next.next.next = new Node("A");
  head.next.next.next.next = new Node("R");
  
  console.log(isPalindrome(head)); // Output: true
  
  // Input: C->O->D->E->NULL
  head = new Node("C");
  head.next = new Node("O");
  head.next.next = new Node("D");
  head.next.next.next = new Node("E");
  
  console.log(isPalindrome(head)); // Output: false
  