// https://leetcode.com/problems/maximum-subarray/

// 53. Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Maintain a result variable to store final result.
    // Use a running sum variable. 
    // While iterating over an array, if a curr value by itself is greater than sum+currVal then update the sum to currValue. Else add it to sum.
    // Update result if sum is greater than result.
    let len = nums.length;
    if(nums.length===0) return 0;
    let sum = nums[0], result=nums[0];
    for(let i=1; i<len; i++){
        sum = Math.max(sum+nums[i], nums[i]);
        result = Math.max(result, sum);
    }
    return result;
};
