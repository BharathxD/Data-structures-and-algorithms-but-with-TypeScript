/**
 * @url https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let finalAnswer = 0;
  let consecutiveOnes = 0;
  for (let value of nums) {
    // If the `i` points to the number that is `1`, we will increment the consecutiveOnes
    if (value) consecutiveOnes++;
    // If the `i` points to the index where the value is `0`, we will reset the `consecitiveOnes` to zero, and assign the `finalAnswer` with the highest value of `consecutiveOnes` and `finalAnswer`
    else {
      finalAnswer = Math.max(consecutiveOnes, finalAnswer);
      consecutiveOnes = 0;
    }
  }
  // If the `i` has reached the nth index, we wouldn't have an oppurtunity to reassign the maximum value to the final answer, so we will return the maximum value instead
  return Math.max(finalAnswer, consecutiveOnes);
};

/**
 * Test Case
 */
const nums = [1, 1, 0, 1, 1, 1]; // 3
console.log(findMaxConsecutiveOnes(nums));
