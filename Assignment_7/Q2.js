function isStrobogrammatic(num) {
    const mapping = {
      "0": "0",
      "1": "1",
      "6": "9",
      "8": "8",
      "9": "6",
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const charLeft = num[left];
      const charRight = num[right];
  
      if (!mapping[charLeft] || mapping[charRight] !== charLeft) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  