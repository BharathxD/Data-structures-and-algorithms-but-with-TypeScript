/**
 * @url https://leetcode.com/problems/majority-element/
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums: number[]): number {
    // Let's assume that the first element of the nums array is the majority element initially
    let majorityElement = nums[0];
    // And also set the frequency for the majority element to zero
    let majorityElementFrequency = 0;
    // Iterate over the nums array bassed on the length
    for (let i = 1; i < nums.length; i++) {
        // Check if the number present at the ith index is same as the current majorityElement, if yes then increment it
        if (nums[i] === majorityElement) majorityElementFrequency++;
        // If it's not same as the current majorityElement and the frequency of the majority element is zero, then reset both the majorityElement and majorityElementFrequency
        else if (majorityElementFrequency === 0) {
            majorityElement = nums[i];
            majorityElementFrequency = 0;
        }
        // If either of the cases are false, decrement the frequency of the majority element
        else majorityElementFrequency--;
    }
    return majorityElement;
};

/**
 * Test Cases
 */
const nums = [2, 2, 3, 2, 4, 3, 9, 8, 16, 16, 5, 16, 5, 16, 34, 56, 16];
console.log(majorityElement(nums));