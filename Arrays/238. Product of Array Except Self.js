// https://leetcode.com/problems/product-of-array-except-self/

// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Product except self of an element is -
    // product of (product of all elements to its left anf product of all elements to its right)
    
    // Iterate over the array to create an array where ith element of the array has 
    // the product of all of input array's elements from 0 to i-1 index
    let left = 1;
    let result = [1];
    for(let i=1; i<nums.length; i++){
        left *= nums[i-1];
        result[i] = left;
    }

    // Now that we have the the left products, we can do the same with the right products
    // Right products can be directtly multiplied with existing left products
    let right = 1;
    for(let i=nums.length-2; i>=0; i--){
        right *= nums[i+1];
        result[i] *= right;
    }
    return result

};
