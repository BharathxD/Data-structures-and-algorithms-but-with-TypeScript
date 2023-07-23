/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums: number[], result: number = 0, i = 0): number {
    if (i === nums.length) return result;
    return singleNumber(nums, result ^= nums[i], ++i);
};

/**
 * Test Cases
 */
const nums = [2, 2, 1]
singleNumber(nums);