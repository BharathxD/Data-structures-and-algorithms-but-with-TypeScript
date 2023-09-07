/**
 * Finds two numbers in an array that add up to a specific target.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum to find.
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target.
 */
var twoSum = function (nums, target) {
  // Create an array of pairs (number, index)
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i];
  }

  // Sort the array based on the first element of each pair (the numbers)
  nums.sort((a, b) => a[0] - b[0]);

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const sum = nums[l][0] + nums[r][0];

    if (sum === target) {
      // If the sum is equal to the target, return the indices of the two numbers
      return [nums[l][1], nums[r][1]];
    } else if (sum < target) {
      // If the sum is less than the target, move the left pointer to the right
      l++;
    } else {
      // If the sum is greater than the target, move the right pointer to the left
      r--;
    }
  }
};

/**
 * Test Case
 */
const nums = [3, 2, 4];
const target = 6;
twoSum(nums, target);
