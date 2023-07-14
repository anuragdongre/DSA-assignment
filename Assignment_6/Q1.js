function reconstructPermutation(s) {
    const perm = new Array(s.length + 1);
    let low = 0;
    let high = s.length;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I') {
        perm[i] = low++;
      } else {
        perm[i] = high--;
      }
    }
  
    perm[s.length] = low;
  
    return perm;
  }
  