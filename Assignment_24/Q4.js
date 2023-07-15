function groupAnagrams(strs) {
    const hashmap = new Map();
  
    for (let str of strs) {
      const sortedStr = str.split("").sort().join("");
  
      if (!hashmap.has(sortedStr)) {
        hashmap.set(sortedStr, []);
      }
  
      hashmap.get(sortedStr).push(str);
    }
  
    return Array.from(hashmap.values());
  }
  
  // Example usage
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
  
  console.log(groupAnagrams([""]));
  // Output: [[""]]
  
  console.log(groupAnagrams(["a"]));
  // Output: [["a"]]
  