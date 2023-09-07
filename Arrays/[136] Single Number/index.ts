/**
 * LeetCode URL: https://leetcode.com/problems/single-number/submissions/
 *
 * Finds the single number in an array where all other elements appear twice.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} result - The initial value for the result (default is 0).
 * @param {number} i - The current index while recursively processing the array (default is 0).
 * @return {number} - The single number in the array.
 */
function singleNumber(nums, result = 0, i = 0) {
    if (i === nums.length) return result;
    return singleNumber(nums, result ^= nums[i], ++i);
}

/**
 * Test Cases
 */
const nums = [2, 2, 1];
singleNumber(nums);
