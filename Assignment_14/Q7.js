class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function nextLargerNodes(head) {
    // Step 1: Store node values in an array
    let arr = [];
    let curr = head;
    while (curr !== null) {
      arr.push(curr.val);
      curr = curr.next;
    }
  
    const n = arr.length;
    const answer = new Array(n).fill(0);
    const stack = [];
  
    // Step 4: Find next greater node for each node
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
        stack.pop();
      }
  
      if (stack.length > 0) {
        answer[i] = arr[stack[stack.length - 1]];
      }
  
      stack.push(i);
    }
  
    return answer;
  }
  
  // Example usage:
  // Linked List: 2 -> 1 -> 5
  let head = new ListNode(2);
  let node1 = new ListNode(1);
  let node2 = new ListNode(5);
  
  head.next = node1;
  node1.next = node2;
  
  let result = nextLargerNodes(head);
  console.log(result);
  