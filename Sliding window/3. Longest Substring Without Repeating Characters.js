// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // maintain a set of characters in the current sliding window 
    // if you spot an 'a' on the right pointer of window and the current window already has an 'a' then
    // move the left pointer to the index next to the index of 'a' in the current window
    let set = new Set(), p1=0, p2=0, result = 0;
    while(p2<s.length){
        // Move the left pointer of window to the place of occurence of the char s[p2] in the current window
        // simultaneously remove the characters that are being lost as the window shortens
        while(set.has(s[p2])){
            set.delete(s[p1]);
            p1++;
        }
        set.add(s[p2]);
        p2++;
        result = Math.max(result, set.size);
    }
    return result;
};

// Instead of using a Set, a Map can be used to store the last seen index of each character. 
// This allows directly jumping the p1 pointer to map.get(s[p2]) + 1, potentially reducing unnecessary increments of p1.
