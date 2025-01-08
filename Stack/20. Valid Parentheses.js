// https://leetcode.com/problems/valid-parentheses/

// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = new Map([
        ['(', ')'], ['{', '}'], ['[',']']
    ]);
    for(let ch of s){
        if(map.has(ch)) stack.push(ch);
        else if(stack.length===0 || map.get(stack[stack.length-1]) !== ch) return false;
        else    stack.pop();
    }
    if(stack.length) return false;
    return true;
};
