function topKFrequentWords(words, k) {
    const wordCount = new Map();
  
    for (let word of words) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
  
    const sortedWords = [...wordCount.keys()].sort((a, b) => {
      const countA = wordCount.get(a);
      const countB = wordCount.get(b);
  
      if (countA === countB) {
        return a.localeCompare(b);
      } else {
        return countB - countA;
      }
    });
  
    return sortedWords.slice(0, k);
  }
  
  // Example usage
  console.log(topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 2));
  // Output: ["i", "love"]
  
  console.log(
    topKFrequentWords(
      ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
      4
    )
  );
  // Output: ["the", "is", "sunny", "day"]
  