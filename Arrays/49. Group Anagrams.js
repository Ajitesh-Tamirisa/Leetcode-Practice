// https://leetcode.com/problems/group-anagrams/

// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map(), result = [];
    for(let s of strs){
        let code = new Array(26).fill(0);
        for(let ch of s){
            let chCode = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            code[chCode] = code[chCode]+1;
        }
        let strCode = code.join(',');
        if(!map.has(strCode))   map.set(strCode, []);
        map.get(strCode).push(s);
    }
    return Array.from(map.values());
};
