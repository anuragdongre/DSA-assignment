function isIsomorphic(s, t) {
    const sMap = new Map();
    const tMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (!sMap.has(charS) && !tMap.has(charT)) {
        sMap.set(charS, charT);
        tMap.set(charT, charS);
      } else if (sMap.has(charS) && tMap.has(charT)) {
        if (sMap.get(charS) !== charT || tMap.get(charT) !== charS) {
          return false;
        }
      } else {
        return false;
      }
    }
  
    return true;
  }
  