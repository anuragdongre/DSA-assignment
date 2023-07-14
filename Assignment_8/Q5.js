function compress(chars) {
    let count = 1;
    let write = 0;
  
    for (let read = 1; read <= chars.length; read++) {
      if (chars[read] === chars[read - 1]) {
        count++;
      } else {
        if (count > 1) {
          const countDigits = count.toString().split('');
          for (let digit of countDigits) {
            chars[write] = digit;
            write++;
          }
        }
  
        chars[write] = chars[read - 1];
        write++;
        count = 1;
      }
    }
  
    return write;
  }
  