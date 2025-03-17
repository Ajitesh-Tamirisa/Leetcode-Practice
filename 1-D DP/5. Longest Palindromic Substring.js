// https://leetcode.com/problems/longest-palindromic-substring/
// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */

// Elaborate and clear solution --------------------------------------------------------------------------------------------------

// var longestPalindrome = function(s) {
//     // Brute force - Create string with all possible start and end indices
//     // and check if each of them are palindromes while keeping track of the largest one.
//     // Another approach would be to consider each and every char to be the middle char of a palindrome
//     // Keep expanding on both sides till it stays a valid palindrome

//     let len = s.length, res=s[0], resLen = 1;
//     for(let i=0; i<len; i++){
//         // For odd length palindromes
//         let st = i, end = i;
//         while(st>=0 && end<len && s[st]==s[end]){
//             st--;
//             end++;
//         }
//         if((end-st-1) > resLen){
//             res = s.substring(st+1, end);
//             resLen = res.length;
//         }
//         // For even length palindromes
//         st = i, end = i+1;
//         while(st>=0 && end<len && s[st]==s[end]){
//             st--;
//             end++;
//         }        
//         if((end-st-1) > resLen){
//             res = s.substring(st+1, end);
//             resLen = res.length;
//         }
//     }
//     return res;
// };

// ----------------------------------------------------------------------------------------------------------------------------------

// Clean code -----------------------------------------------------------------------------------------------------------------------

var longestPalindrome = function(s) {
    // Brute force - Create string with all possible start and end indices
    // and check if each of them are palindromes while keeping track of the largest one.
    // Another approach would be to consider each and every char to be the middle char of a palindrome
    // Keep expanding on both sides till it stays a valid palindrome

    let len = s.length, res=s[0], resLen = 1;
    for(let i=0; i<len; i++){
        // For odd length palindromes
        let odd = helper(i, i, s);
        // For even length palindromes
        let even = helper(i, i+1, s);
        if(odd.length > resLen) res = odd;
        if(even.length > resLen)    res = even;
        resLen = res.length;
    }
    return res;
};

var helper = function(st, end, s){
    while(st>=0 && end<s.length && s[st]===s[end]){
        st--;
        end++;
    } 
    return s.substring(st+1, end);
}
