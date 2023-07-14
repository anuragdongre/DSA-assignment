function findOriginalArray(changed) {
    const countMap = new Map();
  
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    const original = [];
  
    for (const num of changed) {
      if (num % 2 !== 0 || countMap.get(num) === 0) {
        return [];
      }
  
      countMap.set(num, countMap.get(num) - 1);
      original.push(num / 2);
    }
  
    return original;
  }
  