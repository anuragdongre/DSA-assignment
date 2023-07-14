function processString(str) {
    const processed = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        processed.pop();
      } else {
        processed.push(str[i]);
      }
    }
  
    return processed.join("");
  }
  
  function backspaceCompare(s, t) {
    const sProcessed = processString(s);
    const tProcessed = processString(t);
  
    return sProcessed === tProcessed;
  }
  