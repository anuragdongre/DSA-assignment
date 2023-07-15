class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function findTheWinner(n, k) {
    // Create the circular linked list
    let head = new Node(1);
    let curr = head;
    for (let i = 2; i <= n; i++) {
      curr.next = new Node(i);
      curr = curr.next;
    }
    curr.next = head; // Connect the last node to the head to form a circle
  
    // Simulate the game
    while (curr.next !== curr) {
      // Move to the friend immediately clockwise of the friend who lost
      for (let i = 1; i < k; i++) {
        curr = curr.next;
      }
      // Remove the friend who lost
      curr.next = curr.next.next;
    }
  
    return curr.val; // The last remaining friend is the winner
  }
  
  // Example usage:
  console.log(findTheWinner(5, 2)); // Output: 3
  console.log(findTheWinner(6, 5)); // Output: 1
  