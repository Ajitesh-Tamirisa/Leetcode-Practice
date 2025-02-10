// https://leetcode.com/problems/non-overlapping-intervals/

// 435. Non-overlapping Intervals

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// Constraints:
// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let prevEnd = intervals[0][1]; // Track the end time of the last non-overlapping interval
    let count = 0; // Count of intervals to remove

    // Iterate through intervals to find overlaps
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        // Check for overlap
        if (start < prevEnd) {
            count++; // Remove one interval
            prevEnd = Math.min(prevEnd, end); // Keep the interval with the smaller end time
        } else {
            prevEnd = end; // No overlap, update prevEnd
        }
    }

    return count;
};
