const isEven = (number) => number % 2 === 0;

/**
 * 0 -> 0000
 * 1 -> 0001
 * 2 -> 0010
 * 3 -> 0011
 * 4 -> 0100
 * 5 -> 0101
 * 6 -> 0110
 * 7 -> 0111
 */

const binaryToNumber = (value) => {
  let binary = "";
  while (value > 0) {
    if (isEven(value)) binary = "0" + binary;
    else binary = "1" + binary;
    value = Math.floor(value / 2);
  }
  return binary;
};

const binaryToNumberRecursive = (value, binary = "") => {
  if (value < 1) return binary;
  if (isEven(value)) binary = "0" + binary;
  else binary = "1" + binary;
  return binaryToNumberRecursive(Math.floor(value / 2), binary);
};

// Don't use this approach, it's complex and decreases readability
const binaryToNumberRecursiveArrowFunction = (value, binary = "") =>
  value < 1
    ? binary
    : btnra(
        Math.floor(value / 2),
        isEven(value) ? (binary = "0" + binary) : (binary = "1" + binary)
      );

console.log(btnra(34)); // 100010
