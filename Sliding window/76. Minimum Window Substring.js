// https://leetcode.com/problems/minimum-window-substring/

// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // We use a sliding window to find the shortest substring in 's' that contains all characters from 't'.
    // A map stores how many times each character in 't' is needed.
    // As we expand the window, we decrease the needed count for each matching character.
    // When all required characters are included, we try to shrink the window from the left to make it as short as possible.
    // The smallest valid window found during this process is returned.

    let needMap = new Map(), minWindow="", minWindowLen = Number.MAX_SAFE_INTEGER;
    if(s.length<t.length)   return minWindow;
    for(let ch of t){
        needMap.set(ch, (needMap.get(ch)||0)+1);
    }
    let p1=0, p2=0, k=needMap.size;
    while(p2<s.length){
        if(needMap.has(s[p2])){
            let update = needMap.get(s[p2])-1;
            needMap.set(s[p2], update);
            if(update===0)  k--;
        }
        while(k===0){
            if((p2-p1+1)<minWindowLen){
                minWindow = s.substring(p1, p2+1);
                minWindowLen = minWindow.length;
            }
            if(needMap.has(s[p1])){
                needMap.set(s[p1], needMap.get(s[p1])+1);
                if(needMap.get(s[p1])>0)    k++;
            }
            p1++;
        }
        p2++;
    }   
    return minWindow;
};
