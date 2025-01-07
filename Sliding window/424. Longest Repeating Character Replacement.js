// https://leetcode.com/problems/longest-repeating-character-replacement/

// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // Maintain a frequency map to keep count of all chars in window and maxFreq variable to keep track of freq of highest occuring letter.
    // if `length of window - maxF > k` move left end of the window forward and adjust the freq array accordingly.
    // Map to store frequency of characters in the window
    let map = new Map();
    let left = 0, right = 0;
    let maxFreq = 0, result = 0;    
    while (right < s.length) {
        let charRight = s[right];
        map.set(charRight, (map.get(charRight) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(charRight));
        
        // Check if the current window is valid: if the size of the window minus the max frequency > k
        if ((right - left + 1) - maxFreq > k) {
            // Window is invalid, shrink it from the left
            let charLeft = s[left];
            map.set(charLeft, map.get(charLeft) - 1);
            left++;
            // After shrinking, do we need to recalculate maxFreq since the max element may have been removed? --Revisit this
            // maxFreq = Math.max(...Array.from(map.values()));
        }
        
        // Update the result with the size of the valid window
        result = Math.max(result, right - left + 1);
        right++;
    }    
    return result;
};

// Overall time complexity is O(n).
