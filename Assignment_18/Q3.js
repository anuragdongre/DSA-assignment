const solution = (isBadVersion) => (n) => {
    let left = 1; // starting version
    let right = n; // ending version
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        // If the middle version is bad, search in the left half
        right = mid;
      } else {
        // If the middle version is good, search in the right half
        left = mid + 1;
      }
    }
  
    return left; // The left pointer will eventually point to the first bad version
  };
  
  // Example usage:
  const n = 5;
  const bad = 4;
  const isBadVersion = (version) => version >= bad;
  const findFirstBadVersion = solution(isBadVersion);
  console.log(findFirstBadVersion(n)); // Output: 4
  