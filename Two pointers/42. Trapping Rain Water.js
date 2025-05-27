// https://leetcode.com/problems/trapping-rain-water/

// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /**
    * Two-pointer approach to compute trapped rainwater in O(n) time and O(1) space.
    * Use left and right pointers to scan from both ends toward the center.
    * Track the maximum heights seen so far from both sides (leftMax, rightMax).
    * At each step, the side with the smaller height determines the water level.
    * Accumulate water where current height is less than the max on that side.
    * Update maxheights as needed.
    */
    let len = height.length, result = 0;
    let left = 0, right = len-1;
    let leftMax = height[left], rightMax=height[right];
    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>leftMax)    leftMax = height[left];
            result+=leftMax-height[left];
            left++;
        }
        else{
            if(height[right]>rightMax)  rightMax = height[right];
            result += rightMax-height[right];
            right--;
        }
    }
    return result;
};
