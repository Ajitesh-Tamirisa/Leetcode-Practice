// https://leetcode.com/problems/longest-increasing-subsequence/

// 300. Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:
// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // This not the most optimal solution
    // Store the length of longest subsequence at each index
    let mem = [], len = nums.length, result = 1;
    for(let i=0; i<len; i++){
        mem[i] = 1;
    }
    for(let i=len-2; i>=0; i--){
        // Check nums[i] with every 'ni' of mem for all indices greater than i
        let maxLen = Number.MIN_SAFE_INTEGER;
        for(let j=i+1; j<len; j++){
            if(nums[i]<nums[j])   maxLen = Math.max(maxLen, mem[j]+1);
        }
        if(maxLen>Number.MIN_SAFE_INTEGER)  mem[i] = maxLen;
        result = Math.max(result, mem[i]);
    }
    return result;
};
