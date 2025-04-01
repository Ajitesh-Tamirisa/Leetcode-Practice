// https://leetcode.com/problems/happy-number/

// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false
 

// Constraints:
// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = sumOfDigitSquares(n);
    let fast = sumOfDigitSquares(slow);
    while(fast!=1 && slow!==1 && fast!=slow){
        console.log(slow, fast);
        slow = sumOfDigitSquares(slow);
        fast = sumOfDigitSquares(sumOfDigitSquares(fast));
    }
    return fast===1 || slow===1;
};

var sumOfDigitSquares = function(n){
    let sum = 0;
    while(n>0){
        let digit = n%10;
        n = Math.floor(n/10);
        sum += Math.pow(digit, 2);
    }
    return sum;
}
