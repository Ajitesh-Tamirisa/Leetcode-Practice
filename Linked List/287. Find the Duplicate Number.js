// 287. Find the Duplicate Number

// https://leetcode.com/problems/find-the-duplicate-number/

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Example 3:
// Input: nums = [3,3,3,3,3]
// Output: 3

// Constraints:
// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

// Follow up:
// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // This uses Floyd’s Tortoise and Hare algorithm to detect a cycle in the array treated as a linked list.
    // Each index is a node, and nums[i] points to the next node.
    // Phase 1: Find the intersection point of two runners (slow and fast) inside the cycle.
    // Phase 2: Move one pointer to the start, and advance both one step at a time.
    // They will meet at the start of the cycle, which is the duplicate number.

    let fast = nums[0], slow = nums[0];
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast)   break;
    }
    slow = nums[0];
    while(fast !== slow){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
