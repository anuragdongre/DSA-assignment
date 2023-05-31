//Q4

//Algorithm

//Initialize a carry variable with a value of 1.
// Iterate through the digits array from right to left.
// Add the current digit with the carry.
// Update the current digit with the remainder of the sum divided by 10.
// Update the carry by dividing the sum by 10.
// If the carry is still non-zero after the loop, insert it as a new most significant digit at the beginning of the digits array.
// Return the modified digits array.

// The time complexity of this algorithm is O(n), where n is the length of the digits array, as we iterate through each digit once.

function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);

    if (carry === 0) {
      // No need to process further digits
      break;
    }
  }

  if (carry !== 0) {
    digits.unshift(carry);
  }

  return digits;
}

//Example

const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]
