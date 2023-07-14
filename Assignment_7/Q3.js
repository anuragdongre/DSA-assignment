function addStrings(num1, num2) {
    const result = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      let digit1 = 0;
      let digit2 = 0;
  
      if (i >= 0) {
        digit1 = parseInt(num1[i]);
        i--;
      }
  
      if (j >= 0) {
        digit2 = parseInt(num2[j]);
        j--;
      }
  
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result.unshift(sum % 10);
    }
  
    return result.join("");
  }
  