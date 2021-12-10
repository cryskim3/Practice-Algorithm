/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    max = Math.max(currentMax, max);
  }

  return max;
};
/**
 * 문제: 연속된 수들을 더하였을때, 가장 큰 합을 찾으시오.
 */
