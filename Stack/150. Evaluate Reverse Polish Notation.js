// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// 150. Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
 

// Constraints:
// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // We iterate through each token: if it’s a number, we push it onto the stack.
    // If it’s an operator, we pop the top two numbers, apply the operation, and push the result back.
    // At the end, the stack contains a single result which is returned.
    let operators = new Set(['+', '-', '/', '*']);
    let stack = [];
    for(let i=0; i<tokens.length; i++){
        if(operators.has(tokens[i])){
            let operand2 = parseInt(stack.pop());
            let operand1 = parseInt(stack.pop());
            stack.push(calculate(operand1, operand2, tokens[i]));
        }
        else    stack.push(parseInt(tokens[i]));
    }
    return parseInt(stack.pop());
};

var calculate = function(operand1, operand2, operator){
    if(operator === '+')    return operand1+operand2;
    if(operator === '-')    return operand1-operand2;
    if(operator === '*')    return Math.trunc(operand1*operand2);
    else return operand1/operand2;
}
