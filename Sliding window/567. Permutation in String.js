// https://leetcode.com/problems/permutation-in-string/

// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let p1=0, p2=0, base = 'a'.charCodeAt(0);
    let targetCodeArr = new Array(26).fill(0);
    for(let i=0; i<s1.length; i++){
        let index = s1[i].charCodeAt(0)-base;
        targetCodeArr[index]++;
    }
    let targetCode = targetCodeArr.join();
    let windowCodeArr = new Array(26).fill(0);
    while(p2<s2.length){
        windowCodeArr[s2[p2].charCodeAt(0)-base]++;
        if(p2-p1+1>s1.length){
            windowCodeArr[s2[p1].charCodeAt(0)-base]--;
            p1++;
        }
        p2++;
        let windowCode = windowCodeArr.join();
        // Instead of joing and comparing, a function can be used to traverse the arrays and compare each element. This can make the solution faster. 
        if(windowCode === targetCode)   return true;
    }
    return false;
};
