/**
 * This is not a leetcode problem
 * @param nums 
 */
const subArrays = (nums: number[]): void => {
    for (let start = 0; start < nums.length; start++) {
        let str = "";
        for (let end = start; end < nums.length; end++) {
            str += nums[end] + " ";
            console.log(str);
        }
    }
}

/** 
 * Test Cases
 */
const array = [1, 2, 3, 4];
subArrays(array);