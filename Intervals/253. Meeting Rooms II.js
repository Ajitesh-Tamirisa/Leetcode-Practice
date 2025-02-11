// https://neetcode.io/problems/meeting-schedule-ii
// https://leetcode.com/problems/meeting-rooms-ii

// 253. Meeting Rooms II

// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

// Example 1:
// Input: intervals = [(0,40),(5,10),(15,20)]
// Output: 2
// Explanation:
// day1: (0,40)
// day2: (5,10),(15,20)

// Example 2:
// Input: intervals = [(4,9)]
// Output: 1

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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let len = intervals.length, starts_arr = [], ends_arr = [];
        for(let i=0; i<len; i++){
            starts_arr.push(intervals[i].start);
            ends_arr.push(intervals[i].end);
        }
        starts_arr.sort((a,b) => a-b);
        ends_arr.sort((a,b) => a-b);
        let p1 = 0, p2 =0, curr = 0, max=0;
        while(p1<len && p2<len){
            let [st, end] = [starts_arr[p1], ends_arr[p2]];
            if(st<end){
                curr++;
                p1++;
            }
            else{
                curr--;
                p2++;
            }
            max = Math.max(max, curr);
        }
        return max;
    }
}
