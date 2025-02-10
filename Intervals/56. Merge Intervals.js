// https://leetcode.com/problems/merge-intervals/

// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort the intervals based on their start times to ensure they are processed in the correct order.
    // Initialize a variable to keep track of the current merged interval.
    // Iterate through the sorted intervals:
    //     - If the current interval overlaps with the merged interval, update the merged interval’s end.
    //     - If there is no overlap, push the merged interval to the result and start a new merged interval.
    // After the loop, push the last merged interval and return the result.
    intervals.sort((a,b)=>a[0]-b[0]);
    let result = [], mergedInterval = intervals[0];
    for(let i=1; i<intervals.length; i++){
        let curr = intervals[i];
        // Merge if there is an overlap
        if(curr[0]<=mergedInterval[1]){
            mergedInterval = [mergedInterval[0], Math.max(curr[1], mergedInterval[1])];
        }
        // No overlap, push the merged interval and update
        else{
            result.push(mergedInterval);
            mergedInterval = curr;
        }
    }
    // Push the last merged interval
    result.push(mergedInterval);
    return result;
};
