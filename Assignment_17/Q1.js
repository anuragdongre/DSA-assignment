function firstUniqueChar(s) {
    const charCount = new Map();
  
    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount.get(char) === 1) {
        return i;
      }
    }
  
    return -1; // If no non-repeating character found
  }
  
  // Example usage:
  console.log(firstUniqueChar("leetcode")); // Output: 0
  console.log(firstUniqueChar("loveleetcode")); // Output: 2
  console.log(firstUniqueChar("aabb")); // Output: -1
  