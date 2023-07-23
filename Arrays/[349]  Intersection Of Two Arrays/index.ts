function intersection(nums1: number[], nums2: number[]): (number | string)[] {
    const numsOneFrequency: { [key: number]: number } = {};
    const numsTwoFrequency: { [key: number]: number } = {};
    for (let i = 0; i < nums1.length; i++) {
        if (numsOneFrequency[nums1[i]]) numsOneFrequency[nums1[i]]++;
        else numsOneFrequency[nums1[i]] = 1;
    }
    for (let i = 0; i < nums2.length; i++) {
        // Check if the numbers that are present in the numsOneFrequency object keys, are also present in the nums2 array, If true then simply assign that number 
        if (numsOneFrequency[nums2[i]]) numsTwoFrequency[nums2[i]] = 1;
    }
    return Object.keys(numsTwoFrequency);
};

/**
 * Test Cases
 */
const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersection(nums1, nums2));