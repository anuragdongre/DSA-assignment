class FrontMiddleBackQueue {
    constructor() {
      this.frontHalf = [];
      this.backHalf = [];
      this.middle = null;
    }
  
    pushFront(val) {
      this.frontHalf.unshift(val);
      this.balance();
    }
  
    pushMiddle(val) {
      if (this.middle === null) {
        this.middle = val;
      } else {
        const midIndex = Math.floor((this.frontHalf.length - 1) / 2);
        this.frontHalf.splice(midIndex, 0, val);
        this.balance();
      }
    }
  
    pushBack(val) {
      this.backHalf.push(val);
      this.balance();
    }
  
    popFront() {
      if (this.frontHalf.length === 0 && this.backHalf.length === 0) {
        return -1;
      }
      if (this.frontHalf.length > 0) {
        const val = this.frontHalf.shift();
        this.balance();
        return val;
      } else {
        const val = this.backHalf.shift();
        this.balance();
        return val;
      }
    }
  
    popMiddle() {
      if (this.middle === null) {
        return -1;
      }
      const val = this.middle;
      this.middle = null;
      this.balance();
      return val;
    }
  
    popBack() {
      if (this.frontHalf.length === 0 && this.backHalf.length === 0) {
        return -1;
      }
      if (this.backHalf.length > 0) {
        const val = this.backHalf.pop();
        this.balance();
        return val;
      } else {
        const val = this.frontHalf.pop();
        this.balance();
        return val;
      }
    }
  
    balance() {
      const totalLength = this.frontHalf.length + this.backHalf.length;
  
      if (totalLength === 0) {
        this.middle = null;
      } else if (totalLength === 1) {
        if (this.frontHalf.length === 1) {
          this.middle = this.frontHalf[0];
        } else {
          this.middle = this.backHalf[0];
        }
      } else if (this.frontHalf.length > this.backHalf.length + 1) {
        this.backHalf.unshift(this.frontHalf.pop());
        this.middle = this.frontHalf[this.frontHalf.length - 1];
      } else if (this.frontHalf.length < this.backHalf.length) {
        this.frontHalf.push(this.backHalf.shift());
        this.middle = this.frontHalf[this.frontHalf.length - 1];
      }
    }
  }
  
  // Example usage:
  const q = new FrontMiddleBackQueue();
  q.pushFront(1);
  q.pushBack(2);
  q.pushMiddle(3);
  q.pushMiddle(4);
  console.log(q.popFront()); // Output: 1
  console.log(q.popMiddle()); // Output: 3
  console.log(q.popMiddle()); // Output: 4
  console.log(q.popBack()); // Output: 2
  console.log(q.popFront()); // Output: -1
  