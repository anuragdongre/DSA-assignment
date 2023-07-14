function isSwapPossible(s, goal) {
    const diffIndices = [];
    const diffChars = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffIndices.push(i);
        diffChars.push(goal[i]);
      }
    }
  
    if (diffIndices.length === 0) {
      return true;
    }
  
    if (diffIndices.length !== 2) {
      return false;
    }
  
    const [index1, index2] = diffIndices;
    const [char1, char2] = diffChars;
  
    return s[index1] === char2 && s[index2] === char1;
  }
  