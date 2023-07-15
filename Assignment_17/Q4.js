class RecentCounter {
    constructor() {
      this.requests = []; // Queue to store recent requests
    }
  
    ping(t) {
      // Add the new request to the end of the queue
      this.requests.push(t);
  
      // Remove outdated requests from the front of the queue
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
  
      // Return the number of requests in the queue
      return this.requests.length;
    }
  }
  
  // Example usage:
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1)); // Output: 1
  console.log(recentCounter.ping(100)); // Output: 2
  console.log(recentCounter.ping(3001)); // Output: 3
  console.log(recentCounter.ping(3002)); // Output: 3
  