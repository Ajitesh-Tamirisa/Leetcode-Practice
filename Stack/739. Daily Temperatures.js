// https://leetcode.com/problems/daily-temperatures/

// 739. Daily Temperatures

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:
// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // Use a monotonic decreasing stack to track indices of unresolved temperatures.
    // Loop through each temperature, and for each warmer temp, resolve previous colder days.
    // When current temperature is higher than the one at the top of the stack,
    // calculate the number of days waited and update the result.
    // Push the current index onto the stack to wait for a warmer day.
    const len = temperatures.length;
    const result = new Array(len).fill(0);
    const stack = []; // store indices only

    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return result;
};
