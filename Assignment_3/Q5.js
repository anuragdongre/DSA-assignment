// To solve this problem, we can use a simple algorithm that performs the addition operation digit by digit. Starting from the least significant digit, we increment it by 1 and check if there is a carry. If there is a carry, we propagate it to the next digit and continue the process. If there is no carry, we can stop the process and return the updated digits.

function plusOne(digits) {
    const n = digits.length;
    
    // Increment the least significant digit
    digits[n - 1]++;
  
    // Check for carry and propagate if necessary
    let carry = 0;
    for (let i = n - 1; i >= 0; i--) {
      digits[i] += carry;
      carry = Math.floor(digits[i] / 10);
      digits[i] %= 10;
    }
  
    // If there is a remaining carry, insert it at the beginning
    if (carry > 0) {
      digits.unshift(carry);
    }
  
    return digits;
  }
  
  // Test case
  const digits = [1, 2, 3];
  console.log(plusOne(digits));  // Output: [1, 2, 4]

  

//   The time complexity of this algorithm is O(n), where n is the number of digits in the input array. The space complexity is O(1) since we are modifying the digits array in-place without using any additional memory.
