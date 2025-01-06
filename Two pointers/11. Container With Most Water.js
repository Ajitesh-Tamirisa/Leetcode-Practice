// https://leetcode.com/problems/container-with-most-water/description/

// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
 
// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Starting with the widest container (pointers at the edges), ensure that the width is maximized from the start 
    // and then focuses on finding taller lines as the pointers move inward.
    let len = height.length, maxAmount = 0;
    let p1=0, p2=len-1;
    // Maximise the width by placing p1 and p2 as far apart as possible
    // Then start reducing and simulataneously updating the max amount
    while(p1<p2){
        let ht = Math.min(height[p1], height[p2]);
        maxAmount = Math.max(maxAmount, ht * (p2-p1));
        // If the shorter line is moved inward, there is a chance to find a taller line, which could increase the area.
        // If the taller line is moved inward, the width decreases without any potential to find a better area for the current shorter line.
        if(height[p2]>height[p1])   p1++;
        else    p2--;
    }
    return maxAmount;
};
