// https://leetcode.com/problems/word-break/

// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:
// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo = {}) {
    if (s.length === 0) return true; // Base case
    if (s in memo) return memo[s]; // Check if result is already cached

    for (let i = 1; i <= s.length; i++) {
        let subStr = s.substring(0, i);
        if (wordDict.includes(subStr)) {
            if (wordBreak(s.substring(i), wordDict, memo)) {
                memo[s] = true; // Cache the result
                return true;
            }
        }
    }
    memo[s] = false; // Cache false if no valid split found
    return false;
};
