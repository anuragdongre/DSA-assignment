function countCompleteRows(n) {
    let completeRows = 0;
    let i = 1;
  
    while (n >= i) {
      n -= i;
      completeRows++;
      i++;
    }
  
    return completeRows;
  }
  