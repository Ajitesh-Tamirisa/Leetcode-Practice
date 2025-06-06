// https://leetcode.com/problems/top-k-frequent-elements/

// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Create a freq map that maintains count of each element
    let map = new Map();
    for(let i of nums){
        if(!map.has(i))
            map.set(i, 0);
        map.set(i, map.get(i)+1);
    }

    // Create a freq bucket where each index -n  has an array of all elements with frequency n
    let bucket = [];
    for(let [key, value] of map){
        if(!bucket[value])  bucket[value] = [];
        bucket[value].push(key); 
    }

    // Iterate the bucket and find top k
    let result = [];
    for(let i=bucket.length; i>=0; i--){
        if(bucket[i] && bucket[i].length>0)
            result.push(...bucket[i]);
        if(result.length>=k)    break;
    }
    return result;

};
