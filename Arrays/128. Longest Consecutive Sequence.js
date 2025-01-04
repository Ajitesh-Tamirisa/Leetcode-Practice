// https://leetcode.com/problems/longest-consecutive-sequence/

// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Each element can be a start of a sequence or part of a sequence
    // If an element is a start of a sequence 
    // then look through the array to and count the number of consecutive elements.
    // If an element is not the start of a sequence 
    // then it can be skipped because it may have already been covered in a previous sequence 
    // or it will be covered in an upcoming element's sequence

    let result = 0;
    // Add elements to a set to allow for an easier and faster lookup
    let set = new Set(nums);

    // Check if each element is a start of a sequence or not and deal with them accordingly
    for(let i of set){
        if(!set.has(i-1)){
            // number is a start of a sequence
            let curr = i, count=1;
            while(set.has(++curr)){
                count++;
            }
            result = Math.max(result, count);
        }
    }
    return result;
};
