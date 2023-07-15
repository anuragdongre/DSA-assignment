function lengthOfLongestSubstring(s) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    const set = new Set();
  
    while (right < s.length) {
      if (!set.has(s[right])) {
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
      } else {
        set.delete(s[left]);
        left++;
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
  console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
  