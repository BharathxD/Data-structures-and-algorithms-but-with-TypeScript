/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers: number[], target: number): number[] {
    // We are going to use two pointer method to solve this problem

    // Let the left pointer start from the 0th index
    let l = 0;
    // Let the right pointer start from the last index (Which is basically length of the `numbers` array - 1)
    let r = numbers.length - 1;
    // Loop until the left pointer is not less than right pointer (it means that )
    while (l < r) {
        if (numbers[l] + numbers[r] < target) {
            l++;
        } else if (numbers[l] + numbers[r] > target) {
            r--;
        } else return [l + 1, r + 1]
    }
    return [0, 0]
};

/**
 * Test Cases
 */
const numbers = [5, 25, 75]
const target = 100;
console.log(twoSum(numbers, target));