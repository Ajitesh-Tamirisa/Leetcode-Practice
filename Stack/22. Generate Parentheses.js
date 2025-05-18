// https://leetcode.com/problems/generate-parentheses/

// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // backtracking to generate all valid combinations of 'n' pairs of parentheses.
    // At each step, we can add an opening '(' if we haven't used all 'n' opens,
    // and we can add a closing ')' if it won’t exceed the number of opens.
    // Once both open and close counts reach 'n', we have a valid combination to add to the result.
    let result = [];
    let backtrack = (open, close, str) => {
        if(open === close && open=== n){
            result.push(str);
            return;
        }
        if(open>close)  backtrack(open, close+1, str+')');
        if(open<n)  backtrack(open+1, close, str+'(');
    }
    backtrack(0, 0, '');
    return result;
};
