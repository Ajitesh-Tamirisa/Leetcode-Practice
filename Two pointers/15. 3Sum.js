// 15. 3Sum
// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Sort the numbers in ascending order- this will help us avoid duplicates in the final result
    // Using a set to avoiding duplicates will not be helpful because even arrays with same elements will be different objects
    // Fix one number and try to find its 2 sum
    let len = nums.length, result = [];
    nums.sort((a,b)=>a-b);
    // Loop over each element of the array to fix
    for(let i=0; i<len-2; i++){
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let p1 = i+1, p2=len-1;
        while(p1<p2){
            let sum = nums[p1] + nums[p2];
            if(sum === -nums[i]){
                result.push([nums[p1], nums[p2], nums[i]]);
                // Skip duplicates for the second and third numbers
                while(nums[p1]===nums[p1+1] && p1<p2)  p1++;
                while(nums[p2]===nums[p2-1] && p1<p2)  p2--;
                p1++; p2--;
            }
            else if(sum>-nums[i])  p2--;
            else    p1++;
        }
    }
    return result;
};


// Time Complexity Analysis:
// Sorting: 
// O(nlogn) for sorting the array.

// Outer Loop: 
// O(n) iterations for the outer loop.

// Inner Two-Pointer Loop:
// Each iteration of the outer loop involves the two-pointer loop, which scans the array once in O(n) time.
// Since the sum of all pointer movements is 𝑂(𝑛)
// O(n) for each iteration of the outer loop, the inner loop runs in O(n).

// Overall complexity of the nested loops: 𝑂(𝑛⋅𝑛)=𝑂(𝑛^2)
