// Q4

// Algorithm

// Initialize a variable count to 0 to keep track of the number of new flowers that can be planted.
// Iterate through the flowerbed array.
// For each element at index i:
// Check if the current element is 0 and the previous and next elements are also 0 or if it's the first element and the next element is 0 or if it's the last element and the previous element is 0.
// If the condition is met, increment count by 1 and set the current element to 1 to mark it as planted.
// Check if count is greater than or equal to n. If true, return true; otherwise, return false.

// Time complexity: O(n), where n is the length of the flowerbed array. The algorithm iterates through the flowerbed array once.
// Space complexity: O(1), as the algorithm uses a constant amount of extra space regardless of the input size.





function canPlaceFlowers(flowerbed, n) {
    let count = 0;
  
    for (let i = 0; i < flowerbed.length; i++) {
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        count++;
        flowerbed[i] = 1;
      }
    }
  
    return count >= n;
  }
  
  // Example usage
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result = canPlaceFlowers(flowerbed, n);
  console.log(result); // Output: true

  
