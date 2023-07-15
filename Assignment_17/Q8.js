class DataStream {
    constructor(value, k) {
      this.stream = [];
      this.value = value;
      this.k = k;
    }
  
    consec(num) {
      this.stream.push(num);
      if (this.stream.length < this.k) {
        return false;
      }
      for (let i = this.stream.length - this.k; i < this.stream.length; i++) {
        if (this.stream[i] !== this.value) {
          return false;
        }
      }
      return true;
    }
  }
  
  // Example usage:
  const dataStream = new DataStream(4, 3);
  console.log(dataStream.consec(4)); // Output: false
  console.log(dataStream.consec(4)); // Output: false
  console.log(dataStream.consec(4)); // Output: true
  console.log(dataStream.consec(3)); // Output: false
  