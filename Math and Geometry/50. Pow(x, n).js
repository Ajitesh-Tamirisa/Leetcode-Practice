// https://leetcode.com/problems/powx-n/

// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let result = helper(x,Math.abs(n))
    return n>=0 ? result : 1/result;
};

var helper = function(x, n){
    if(x===0)   return 0;
    if(n===0 || x===1)   return 1;
    // x^n = (x^(n/2))*(x^n/2) when n is even
    // x^n = x * (x^((n-1)/2))*(x^(n-1)/2) when n is even
    let result = helper(x, Math.floor(n/2));
    result *= result;
    if(n%2===1) result *= x;
    return result;
}
