/**
 * @url https://leetcode.com/problems/asteroid-collision/
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  // Declare an array which works like a stack
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (stack.length === 0 || asteroids[i] > 0) stack.push(asteroids[i]);
    // If the stack is empty or a positive value arrives, then do a blind insertion
    else {
      while (stack.length !== 0) {
        // Let's just get the top value of the stack
        const top = stack[stack.length - 1];
        // If the top value is negative, we will just push the current value to the stack and break the loop
        if (top < 0) {
          stack.push(asteroids[i]);
          break;
        }
        // We will convert the current negative value to a an absolute value
        const modVal = Math.abs(asteroids[i]);
        // If both the values are same, we will remove both (ps: we haven't inserted the first value)
        if (modVal === top) {
          stack.pop();
          break;
        }
        // If the existing number on the top of the stack is greater than the mod value, we will simply break the loop, as there is no need to push the modVal/current val to the stack
        else if (modVal < top) {
          break;
          // If the `modVal` is greater than the top, we will pop the value out of the stack
        } else {
          stack.pop();
          // If the stack gets empty, we will push the current value
          if (stack.length === 0) {
            stack.push(asteroids[i]);
            break;
          }
        }
      }
    }
  }
  console.log(stack);
  const resultArray = Array(stack.length);
  // Populate the result array from the last
  for (let i = resultArray.length - 1; i >= 0; i--) {
    resultArray[i] = stack.pop();
  }
  return resultArray;
};

asteroidCollision([5, 10, -5]);
