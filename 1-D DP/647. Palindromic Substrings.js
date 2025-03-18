// https://leetcode.com/problems/palindromic-substrings/

// 647. Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:
// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
    let st = 0, end = 0, len = s.length;
    for(let i=0; i<len; i++){
        let oddCount = helper(i, i, s);
        let evenCount = helper(i, i+1, s);
        res += oddCount+evenCount;
    }
    return res;
};
var helper = function(st, end, s){
    let count = 0;
    while(st>=0 && end<s.length && s[st]===s[end]){
        count++;
        st--;
        end++;
    }
    return count;
}
