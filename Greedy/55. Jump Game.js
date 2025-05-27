// https://leetcode.com/problems/jump-game/

// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Maintain a variable to store maximum index that can be reached based on elements seen so far while iterating the array
    // Update maxReach with currIndex+nums[currIndex] if that is bigger
    // During the iteration, return false if maxreach is lesser than the current index. This means that currIndex cannot be reached.
    // Return true if one iteration of the array is complete and the last index is also checked with the above condition.
    let maxReach = 0;
    for(let i=0; i<nums.length; i++){
        if(maxReach<i)  return false;
        maxReach = Math.max(maxReach, i+nums[i]);
    }
    return true;
};
