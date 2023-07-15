function nthUglyNumber(n) {
    const ugly = new Array(n);
    ugly[0] = 1;
  
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
  
    for (let i = 1; i < n; i++) {
      const nextUgly = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
  
      if (nextUgly === ugly[p2] * 2) {
        p2++;
      }
  
      if (nextUgly === ugly[p3] * 3) {
        p3++;
      }
  
      if (nextUgly === ugly[p5] * 5) {
        p5++;
      }
  
      ugly[i] = nextUgly;
    }
  
    return ugly[n - 1];
  }
  
  // Example usage
  console.log(nthUglyNumber(10)); // Output: 12
  console.log(nthUglyNumber(1)); // Output: 1
  