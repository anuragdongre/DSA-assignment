// Initialize left to 0 and right to n.
// While left is less than or equal to right, do the following steps:
// Calculate the midpoint mid as the floor of the average of left and right.
// Calculate the sum currSum of the first mid natural numbers using the formula (mid * (mid + 1)) / 2.
// If currSum is equal to n, return mid as the number of complete rows.
// If currSum is less than n, update left to mid + 1 to search for a larger k.
// If currSum is greater than n, update right to mid - 1 to search for a smaller k.
// Return right as the number of complete rows. Since right is the last value that satisfies currSum < n, it represents the largest k such that the sum of the first k natural numbers is less than or equal to n.

function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const currSum = (mid * (mid + 1)) / 2;
  
      if (currSum === n) {
        return mid;
      } else if (currSum < n) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return right;
  }
  
  // Test case
  const n = 5;
  console.log(arrangeCoins(n));

  
//   The time complexity of this algorithm is O(log n) due to the binary search. The space complexity is O(1) as we only use a constant amount of additional space.

