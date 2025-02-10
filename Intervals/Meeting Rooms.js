// https://neetcode.io/problems/meeting-schedule

// Meeting Rooms
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Example 1:
// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: false
// Explanation:
// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict

// Example 2:
// Input: intervals = [(5,8),(9,15)]
// Output: true

// Note:
// (0,8),(8,10) is not considered a conflict at 8

// Constraints:
// 0 <= intervals.length <= 500
// 0 <= intervals[i].start < intervals[i].end <= 1,000,000

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        for(let i=0; i<intervals.length-1; i++){
            if(intervals[i][1]>intervals[i+1][0]){
                return false;
            }
        }
        return true;
    }
}
