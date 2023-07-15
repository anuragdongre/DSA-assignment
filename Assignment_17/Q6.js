function deckRevealedIncreasing(deck) {
    // Sort the deck in ascending order
    deck.sort((a, b) => a - b);
  
    const n = deck.length;
    const result = new Array(n).fill(0);
    const queue = [];
  
    // Initialize the indices of the result array
    for (let i = 0; i < n; i++) {
      queue.push(i);
    }
  
    // Reveal the cards in increasing order
    for (const card of deck) {
      result[queue.shift()] = card; // Reveal the top card
      if (queue.length > 0) {
        // Move the next top card to the bottom
        queue.push(queue.shift());
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); // Output: [2, 13, 3, 11, 5, 17, 7]
  console.log(deckRevealedIncreasing([1, 1000])); // Output: [1, 1000]
  