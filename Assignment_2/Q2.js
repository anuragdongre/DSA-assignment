// Q2

// Algorithm

// Create a set, uniqueCandies, to store the unique types of candies.
// Iterate through the candyType array.
// For each candy type, add it to the uniqueCandies set.
// Check the size of the uniqueCandies set.
// If the size of uniqueCandies is greater than n / 2, return n / 2 since Alice can only eat a maximum of n / 2 different types of candies.
// Otherwise, return the size of the uniqueCandies set.

// Time complexity: O(n), where n is the length of the candyType array.
// Space complexity: O(n), as the algorithm uses a set to store the unique candy types, which can have a maximum size of n/2.

function maxCandies(candyType) {
    const uniqueCandies = new Set();
  
    for (const candy of candyType) {
      uniqueCandies.add(candy);
    }
  
    return Math.min(uniqueCandies.size, candyType.length / 2);
  }
  
  // Example usage
  const candyType = [1, 1, 2, 2, 3, 3];
  const result = maxCandies(candyType);
  console.log(result); // Output: 3

  
