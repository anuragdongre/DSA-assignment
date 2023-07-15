class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(val) {
      this.q1.push(val);
    }
  
    pop() {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
      return this.q1.shift();
    }
  
    top() {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
      const topElement = this.q1[0];
      this.q2.push(this.q1.shift());
      [this.q1, this.q2] = [this.q2, this.q1]; // Swap the names of q1 and q2
      return topElement;
    }
  
    isEmpty() {
      return this.q1.length === 0 && this.q2.length === 0;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // Output: 3
  stack.push(4);
  console.log(stack.pop()); // Output: 4
  