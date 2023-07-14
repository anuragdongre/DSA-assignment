function findOriginalArray(changed) {
    const countMap = new Map();
  
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    const original = [];
  
    for (const num of changed) {
      if (num === 0) {
        if (countMap.get(num) >= 2) {
          countMap.set(num, countMap.get(num) - 2);
          original.push(num / 2);
        } else {
          return [];
        }
      } else {
        if (countMap.get(num) > 0 && countMap.get(num * 2) > 0) {
          countMap.set(num, countMap.get(num) - 1);
          countMap.set(num * 2, countMap.get(num * 2) - 1);
          original.push(num);
        } else {
          return [];
        }
      }
    }
  
    return original;
  }
  