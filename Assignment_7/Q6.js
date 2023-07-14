function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const sConcat = s + s;
    return sConcat.includes(goal);
  }
  