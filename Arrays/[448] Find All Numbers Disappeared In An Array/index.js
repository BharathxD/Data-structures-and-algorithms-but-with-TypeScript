/**
 * @url https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // Prepare the index to negate it
    let idx = Math.abs(nums[i]) - 1;
    // We will negate the value at `idx`'th index
    if (nums[idx] > 0) nums[idx] *= -1;
  }
  let resultArr = [];
  // Check if there are any positive numbers
  for (let i = 0; i < nums.length; i++) {
    // if there are any postive number, then their `index + 1` value is not present
    if (nums[i] > 0) resultArr.push(i + 1);
  }
  return resultArr;
};

nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
