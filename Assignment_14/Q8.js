class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeZeroSumSublists(head) {
    // Create a dummy node
    let dummy = new ListNode(0);
    dummy.next = head;
  
    let curr = dummy;
    let sum = 0;
    let sumMap = new Map();
  
    while (curr !== null) {
      sum += curr.val;
  
      if (sumMap.has(sum)) {
        // Remove nodes between the previous node with running sum and the current node
        let prevNode = sumMap.get(sum).next;
        let removeSum = sum + prevNode.val;
        while (prevNode !== curr) {
          sumMap.delete(removeSum);
          prevNode = prevNode.next;
          removeSum += prevNode.val;
        }
  
        // Update the next pointer of the previous node
        sumMap.get(sum).next = curr.next;
      } else {
        sumMap.set(sum, curr);
      }
  
      curr = curr.next;
    }
  
    return dummy.next;
  }
  
  // Example usage:
  // Linked List: 1 -> 2 -> -3 -> 3 -> 1
  let head = new ListNode(1);
  let node1 = new ListNode(2);
  let node2 = new ListNode(-3);
  let node3 = new ListNode(3);
  let node4 = new ListNode(1);
  
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  head = removeZeroSumSublists(head);
  
  // Print the final linked list
  let curr = head;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
  