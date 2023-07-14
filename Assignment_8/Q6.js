function findAnagrams(s, p) {
    const pMap = new Map();
    const windowMap = new Map();
    let matches = 0;
    const result = [];
  
    // Count the frequency of characters in p
    for (let char of p) {
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      // Expand the window
      const charRight = s[right];
      windowMap.set(charRight, (windowMap.get(charRight) || 0) + 1);
      if (pMap.has(charRight) && windowMap.get(charRight) === pMap.get(charRight)) {
        matches++;
      }
      right++;
  
      // Shrink the window if necessary
      if (right - left === p.length) {
        if (matches === pMap.size) {
          result.push(left);
        }
  
        const charLeft = s[left];
        if (pMap.has(charLeft) && windowMap.get(charLeft) === pMap.get(charLeft)) {
          matches--;
        }
        windowMap.set(charLeft, windowMap.get(charLeft) - 1);
        if (windowMap.get(charLeft) === 0) {
          windowMap.delete(charLeft);
        }
        left++;
      }
    }
  
    return result;
  }
  