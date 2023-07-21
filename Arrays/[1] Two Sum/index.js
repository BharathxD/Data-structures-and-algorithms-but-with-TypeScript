/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) nums[i] = [nums[i], i];
  nums.sort((a, b) => a[0] - b[0]);
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const sum = nums[l][0] + nums[r][0];
    if (sum === target) {
      return [nums[l][1], nums[r][1]];
    } else if (sum < target) l++;
    else r--;
  }
};

/**
 * Test Case
 */
const nums = [3, 2, 4];
const target = 6;
twoSum(nums, target);
