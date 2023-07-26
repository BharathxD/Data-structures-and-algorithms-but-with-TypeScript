const palindrome = (value) => {
  value = value.toString();
  let i = 0;
  let j = value.length - 1;
  while (i <= j) {
    if (value.charAt(i) !== value.charAt(j)) return false;
    i++;
    j--;
  }
  return true;
};

console.log(palindrome(1234)); // false
console.log(palindrome(12321)); // true
