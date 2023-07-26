/**
 * @url https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums: number[]): number[][] {
    /**
     * Approach Two Pointer
     * i + j + k = 0
     * i + j = -k
     * Let's assume that `-k` is `c`
     * i + j = c
     */
    // Sort the array for the two pointer approach
    nums.sort((a, b) => a - b);
    // Create `result` to store the results
    let result: number[][] = [];
    // Iterate over the each element in the `nums` array
    for (let i = 0; i < nums.length; i++) {
        /**
         * As the array is sorted we need to check if the elements at ith index and i - 1 index are same.
         * If they are same, we need to continue the loop, as they are duplicate elements.
         * We don't want duplicate elements in our triplets.
         */
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        // Assign that `-c` to c
        let c = -nums[i];
        // Determine the start and end pointers
        let l = i + 1, r = nums.length - 1;
        // Iterate over the rest of the arrays
        while (l < r) {
            // Store the sum in `sum`
            const sum = nums[l] + nums[r];
            // If sum is less than c, increment l (left pointer)
            if (sum < c) l++
            // If sum is greater than c, decrement r (right pointer)
            else if (sum > c) r--;
            // If sum is equals to c, then push the results to the result array, and increment left and decrement right
            else {
                result.push([nums[l], nums[i], nums[r]]);
                /**
                 * Make sure that the solutions doesn't contain any duplicate triplets:
                 * Move l to the right until nums[l] is different from nums[l + 1]
                 * Move r to the left until nums[r] is different from nums[r - 1].
                 */
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
    return result;
};
