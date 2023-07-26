/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0; // iterate on nums1
  let j = 0; // iterate on nums2
  let k = 0; // iterate on the result
  let nums1Duplicate = [...nums1];
  while (i < m && j < n) {
    if (nums1Duplicate[i] < nums2[j]) {
      nums1[k] = nums1Duplicate[i];
      i++;
      k++;
    } else {
      nums1[k] = nums2[j];
      j++;
      k++;
    }
  }
  // If the nums1 array still has some elements left
  while (i < m) {
    nums1[k] = nums1Duplicate[i];
    i++;
    k++;
  }
  // If the nums2 array still has some elements left
  while (j < n) {
    nums1[k] = nums2[j];
    j++;
    k++;
  }
  console.log(nums1);
};

nums1 = [1, 2, 3];
m = 3;
nums2 = [2, 5, 6];
n = 3;
merge(nums1, m, nums2, n);
